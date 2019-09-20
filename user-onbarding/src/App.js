import React, {useState} from 'react';
import './App.css'
import FormikSignUpForm from "./components/Form"
import {UsersCard} from "./components/UsersCard"


function App() {
  const [user, setUser] = useState([]);
  
  
  return (

    <div className="App">
      <FormikSignUpForm setUser={setUser}></FormikSignUpForm>
      <div>
        <UsersCard user={user}></UsersCard>
      </div>
    </div>
  );
}

export default App;
