import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };
  return (
    <section className="container">
      <h3> {people.length} birthdays today</h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => removePerson(id)}>Remove me</button>
          </article>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Click to remove all birthdays
      </button>
    </section>
  );
}

export default App;
