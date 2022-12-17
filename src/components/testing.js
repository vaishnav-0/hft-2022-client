import React from "react";
import { getEvents, createEvent, likeEvent, unlikeEvent, getLiked, verifyEventStart, unverifyEventStart, endEvent, verifyEventEnd, unverifyEventEnd } from "../functions/db";
import { auth } from "../firebase";
import { isAdmin as isAdminFn, setPrevSignedIn } from "../functions/auth";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { uploadEventImages } from "../functions/storage";



export default function Testing() {
    const [events, setEvents] = React.useState([]);
    const [likes, setLikes] = React.useState({});
    const [isAdmin, setIsAdmin] = React.useState(false);
    const imageRef = React.useRef();

    const navigate = useNavigate();
    const user = auth.currentUser;

    const logout = () => signOut(auth).then(() => {
        setPrevSignedIn(false);
        navigate("/");
    }).catch((error) => {
        console.log(error);
    });

    React.useEffect(() => {

        getEvents().then((ev) => {
            setEvents(ev);

        })
        isAdminFn(user).then(res => setIsAdmin(res));


    }, []);
    React.useEffect(() => {
        if (events.values().length != 0)
            getLiked(events.values().map(ev => ev.id), user.uid).then(likes => {
                setLikes(likes);
            })
    }, [events])
    return (
        <>
            <button onClick={() => createEvent(user.uid, user.displayName, "sdf", Array.from(imageRef.current.files), "desc")}>add event</button>
            <br />
            <br />
            <button onClick={() => verifyEventStart("PB4eCLTR5gbgY6rQRQMW", user.uid)}>verify PB4eCLTR5gbgY6rQRQMW</button>

            <br />
            <br />
            <button onClick={() => unverifyEventStart("PB4eCLTR5gbgY6rQRQMW", user.uid)}>unverify PB4eCLTR5gbgY6rQRQMW</button>

            <br />
            <button onClick={() => likeEvent("PB4eCLTR5gbgY6rQRQMW", user.uid)}>like PB4eCLTR5gbgY6rQRQMW</button>
            <br />

            <button onClick={() => unlikeEvent("PB4eCLTR5gbgY6rQRQMW", user.uid)}>unlike PB4eCLTR5gbgY6rQRQMW</button>
            <br />
            <br />

            <button onClick={() => endEvent("PB4eCLTR5gbgY6rQRQMW", user.uid, Array.from(imageRef.current.files))}>end PB4eCLTR5gbgY6rQRQMW</button>
            <br />
            <br />

            <button onClick={() => verifyEventEnd("PB4eCLTR5gbgY6rQRQMW", user.uid)}>Verify end PB4eCLTR5gbgY6rQRQMW</button>
            <br />
            <br />

            <button onClick={() => unverifyEventEnd("PB4eCLTR5gbgY6rQRQMW", user.uid)}>unVerify end PB4eCLTR5gbgY6rQRQMW</button>
            <br />
            <button onClick={() => logout()}>logout</button>

            <br />
            <input ref={imageRef} type="file" multiple accept="image/*" />
            <br />
            <div>
                Events:
                <div>
                    {JSON.stringify(events)}
                    <br />
                    {JSON.stringify(likes)}
                    <br />
                    isAdmin:{isAdmin.toString()}

                </div>
            </div>

        </>
    );
}