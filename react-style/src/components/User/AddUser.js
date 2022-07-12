import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    // Si l'un des champs est vide on ne retourne rien
    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      // console.log('true for username');
      return;
    }
    /* "+" force la variable a etre de type nombre */
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
<>
    <ErrorModal title="an error occured" message="Something went wrong" />
    {/* // "Card" envellope le formulaire avec un composant qui va servir de container */}
    <Card className={classes.input}>
      {" "}
      {/* Ici "className" est considerer comme un attribut pour le composant card et comme le className pour ajouter une classe à une balise html"*/}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
