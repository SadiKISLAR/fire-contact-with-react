import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";

const initialValues = {
  userName: "",
  phoneNumber: "",
  gender: ""
}

function App() {
  const [info, setInfo] = useState(initialValues)

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} />
      <Contacts />
    </div>
  );
}

export default App;
