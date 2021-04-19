import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Footer from "./Footer";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      work={contact.comp}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <h5>React App - Mapping Data to Components</h5>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQHvYTRTlqlPVQ/profile-displayphoto-shrink_200_200/0/1517748797991?e=1624492800&v=beta&t=dNh2-JAYfUci7OSWBw7_baUD73TGt7v148QpkFhUuWw" />

      {contacts.map(createCard)}

      <Footer />

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        work={contacts[0].comp}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        work={contacts[1].comp}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        work={contacts[2].comp}
      /> */}
    </div>
  );
}

export default App;
