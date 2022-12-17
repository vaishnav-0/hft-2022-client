import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

// Create a root reference


// Create a reference to 'mountains.jpg'

// Create a reference to 'images/mountains.jpg'

// 'file' comes from the Blob or File API

export async function uploadEventImages(storageRef, files) {
    return new Promise(function (resolve, reject) {

        Promise.all(
            // Array of "Promises"
            files.map(item => {
                return uploadString(ref(storage, storageRef + "/" + Math.round(+new Date() / 1000) + "webp"), item, 'data_url')
            })
        )
            .then((snaps) => {

                Promise.all(
                    // Array of "Promises"
                    snaps.map(snap => getDownloadURL(snap.ref))
                )
                    .then((snaps) => {
                        resolve(snaps)
                    })
                    .catch((error) => {
                        reject(error)
                    });

            })
            .catch((error) => {
                reject(error)
            });
    })

}

