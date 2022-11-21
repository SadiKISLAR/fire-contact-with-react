import { getDatabase, ref, set, push } from "firebase/database";


export const AddUser = (info) => {
    const db = getDatabase();
    const userRef = ref(db, "user/");
    const newUserRef = push(userRef);


    set(newUserRef, {
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender
    })
    console.log("add userda bilgiler kaydeildi")
}