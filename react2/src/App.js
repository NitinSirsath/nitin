import React from 'react'
// import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

const App = () => {
  const contacts = [
    {
    id: "1",
    name: "nitin",
    email: "nitinsirsath8855@gmail.com"
  },
    {
    id: "2",
    name: "raze",
    email: "razesirsath8855@gmail.com"
  },
  ];
 
  return (
    <>
      <Header />
      <AddContact />
      {/* <ContactList name="contacts" /> */}
      <ContactList contacts={contacts} />
    </>
    
  )
}

export default App;
