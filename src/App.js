import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, UpdateUser } from "./utils/functions";

const initialValues = {
  userName: "",
  phoneNumber: "",
  gender: ""
}

function App() {
  const [info, setInfo] = useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateUser(info)
    }
    else {
      AddUser(info)
    }
    setInfo(initialValues)
  }

  const editUser = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender })
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <Contacts editUser={editUser} />
      <ToastContainer />
    </div>
  );
}

export default App;
