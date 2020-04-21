import React, { useState } from 'react';
import './App.css';


//set up a Default memberList to add onto later
const memberList = [{
  name: "Bobby",
  email: "Bobby@LambdaSchool.com",
  role: "Backend Engineer",
},
];

//set up Inital Form Values
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: "",
  email: "",
  role: "",
};

function App() {
  //setting state to members to be added to referencing to the Default memberList
  const [members, setMembers] = useState(memberList);
  //setting state to form values to be added to referencing to the initialFormValues
  const [formValues, setFormValues] = useState(initialFormValues);
  //THIS IS WHERE WE WILL BE ADDING THE CHANGE HANDLER
  return (
    <div className="App">

    </div>
  );
}

export default App;
