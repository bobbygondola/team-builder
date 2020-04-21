import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

//set up a Default memberList to add onto later
const memberList = [
  {
    name: "Bobby",
    email: "Bobby@LambdaSchool.com",
    role: "Backend Engineer",
  },
];

//set up Inital Form Values
const initialFormValues = {
  //Text inputs
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

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    // set a new state for the whole form
      setFormValues({
        ///copy over all the properties from formValues
        ...formValues,
        [name]: value,
      });
      }

      const onSubmit = (evt) => {
        //don't allow the browser to reload!
        evt.preventDefault();

        const newMember = {
          name: formValues.name,
          email: formValues.email,
          role: formValues.role,
        };
        
        //    set up the new friend with the correct attributes
        setMembers([...members, newMember]);
        debugger
        //    using the information inside the state of the form
        // c) update the list of friends in state with the new friend
        // d) optionally clear the form
        setFormValues(initialFormValues);
      };

    return (
      <div className="App">
        <header>
          <h1>Team Builder</h1>
        </header>
        {/* rendering the list we currently have */}
        {members.map((member) => {
          return (
            <div key={member.name}>
              {member.name}
              <br></br>
              {member.email}
              <br></br>
              {member.role}
            </div>
          );
        })}

        <Form values={formValues} onInputChange={onInputChange} onSubmit={onSubmit}/>
      </div>
    );
  };

export default App;
