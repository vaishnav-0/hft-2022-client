import { async } from "@firebase/util";
import { firestore } from "../firebase";

import { addDoc, collection, serverTimestamp, getDocs, getDoc, doc, deleteDoc, setDoc, updateDoc, query, where, collectionGroup, FieldPath } from "firebase/firestore";
import { uploadEventImages } from "./storage";

// Add a new document in collection "cities"


export async function createEvent(user, userName, location, images, description, lat, lng) {
    const imgs = await uploadEventImages(user, images);
    console.log(user, imgs)
    await addDoc(collection(firestore, "events"), {
        createdBy: user,
        creatorName: userName,
        location: location,
        lat: lat,
        lng: lng,
        images: imgs,
        description: description,
        timestamp: serverTimestamp()
    })

}

export async function endEvent(eventId, user, images) {
    const imgs = await uploadEventImages(user, images);
    console.log(user, imgs)
    await setDoc(doc(firestore, "events", eventId, "verification", "ending"), {
        images: imgs,
        closed: true
    });

}



export async function getEvents() {
    const querySnapshot = await getDocs(collection(firestore, "events"));
    const events = {}
    querySnapshot.forEach((doc) => {
        events[doc.id] = doc.data();
    });
    return events;
}

export async function getEvent(eventId) {
    const querySnapshot = await getDoc(doc(firestore, "events", eventId));
    return querySnapshot.data();
}

export async function isLiked(eventId, user) {
    const querySnapshot = await getDoc(doc(firestore, "users", user, "likes", eventId));
    console.log(querySnapshot.exists())
    return querySnapshot.exists();
}

export async function getLikedEvents(user) {
    const querySnapshot = await getDocs(collection(firestore, `users/${user}/likes`));
    const events = {}
    querySnapshot.forEach((doc) => {

        console.log(doc)
        events[doc.id] = doc.data();
    });
    const q = query(collection(firestore, `events/`), where(FieldPath.documentId(), 'in', events.map(e => e.id)));
    const eventQuerySnapshot = await getDocs(q);
    eventQuerySnapshot.forEach((doc) => {
        events[doc.id] = doc.data()
    });
    return events;
}

export async function likeEvent(eventId, userId) {
    await setDoc(doc(firestore, "users", userId, "likes", eventId), {
        eventId: eventId
    });
}

export async function unlikeEvent(eventId, userId) {
    await deleteDoc(doc(firestore, "users", userId, "likes", eventId));
}

export async function getLiked(eventIds, userId) {
    console.log(eventIds)
    const liked = await getContentById(eventIds, `users/${userId}/likes`, "eventId");
    const likes = {}
    liked.forEach((doc) => {
        likes[doc.id] = true;;
    });
    console.log(likes)
    return likes;

}


export async function verifyEventStart(eventId, userId) {
    await setDoc(doc(firestore, "events", eventId, "verification", "starting"), {
        verfiedBy: userId,
        status: true,
        comment: ""
    });
}

export async function unverifyEventStart(eventId, userId) {
    await setDoc(doc(firestore, "events", eventId, "verification", "starting"), {
        verfiedBy: userId,
        status: false,
        comment: ""
    });
}

export async function verifyEventEnd(eventId, userId) {
    await updateDoc(doc(firestore, "events", eventId, "verification", "ending"), {
        verfiedBy: userId,
        status: true,
        comment: ""
    });
}

export async function unverifyEventEnd(eventId, userId) {
    await updateDoc(doc(firestore, "events", eventId, "verification", "ending"), {
        verfiedBy: userId,
        status: false,
        comment: ""
    });
}


export async function contributeEvent(eventId, user, images) {
    const imgs = await uploadEventImages(user, images);
    console.log(user, imgs)
    await setDoc(doc(firestore, "users", user, "contributions", eventId), {
        eventId: eventId,
        images: imgs,
        verified: false,
        user: user
    });

}

export async function verifyContribution(eventId, user) {
    await setDoc(doc(firestore, "users", user, "contributions", eventId), {
        verified: true,
        verifiedBy: user
    });
}


export async function getContributedEvents(user) {

    const querySnapshot = await getDocs(collection(firestore, `users/${user}/contributions`));
    const events = {}
    querySnapshot.forEach((doc) => {

        events[doc.id] = doc.data();
        
    });
    const q = query(collection(firestore, `events/`), where(FieldPath.documentId(), 'in', events.map(e => e.id)));
    const eventQuerySnapshot = await getDocs(q);
    eventQuerySnapshot.forEach((doc) => {
        events[doc.id]["eventData"] = doc.data();;
    });
    return events;

}

export async function getContentById(ids, path, match) {
    // don't run if there aren't any ids or a path for the collection
    if (!ids || !ids.length || !path) return [];

    const collectionPath = collection(firestore, path);
    const batches = [];

    while (ids.length) {
        // firestore limits batches to 10
        const batch = ids.splice(0, 10);

        // add the batch request to to a queue
        batches.push(
            getDocs(query(
                collectionPath,
                where(
                    match,
                    'in',
                    [...batch]
                ))))
    }

    // after all of the data is fetched, return it
    return Promise.all(batches).then(results => {
        const ret = []
        results.forEach((docs) => {
            docs.forEach((doc) => {
                ret.push({ id: doc.id, ...doc.data() })
            });
        });
        return ret;
    });
}