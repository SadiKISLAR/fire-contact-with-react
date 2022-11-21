import { getDatabase, ref, set, push } from "firebase/database";
import firebase from "./firebase"


export const AddUser = (info) => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");
    const newUserRef = push(userRef);


    set(newUserRef, {
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender
    })
    console.log("add userda bilgiler kaydeildi")
}