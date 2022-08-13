import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { GlobalStyle } from 'components/GlobaleStyle';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';

const Container = styled.div``;
const Box = styled.div``;

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  auditContact = newContact => {
    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  // addContact = (name, number) => {
  //   console.log(name, number);

  //   const contact = {
  //     id: nanoid(),
  //     name: name,
  //     number,
  //   };

  //   console.log(contact.name);

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  addContact = newContact => {
    if (this.auditContact(newContact)) {
      alert(`This name already exists`);
      return;
    }

    const addedContact = { id: nanoid(), ...newContact };
    console.log(newContact);
    console.log(addedContact);
    this.setState(prevState => ({
      contacts: [addedContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deletContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredPhoneBook = this.getVisibleContacts();

    return (
      <Container
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          padding: 20,
        }}
      >
        <GlobalStyle />
        <Box>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredPhoneBook}
            onDeletContact={this.deletContact}
          />
        </Box>
      </Container>
    );
  }
}

export default App;
