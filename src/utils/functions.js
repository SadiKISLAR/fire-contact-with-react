import { getDatabase, ref, set, push, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase"
import Toastify from "./toastify";

export const AddUser = (info) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");
    const newUserRef = push(userRef);


    set(newUserRef, {
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender
    })
}
export const useFetch = () => {

    const [isLoading, setIsLoading] = useState()
    const [contactList, setContactList] = useState()

    useEffect(() => {
        const db = getDatabase(firebase);
        const userRef = ref(db, "user/");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const userArray = []

            for (let id in data) {
                userArray.push({ id, ...data[id] })
            }
            setContactList(userArray)
            setIsLoading(false)
        })
    }, [])

    return { isLoading, contactList }

}

export const DeleteUser = (id) => {
    const db = getDatabase(firebase);
    remove(ref(db, "user/" + id))
    Toastify("Deleted Successfully")

}