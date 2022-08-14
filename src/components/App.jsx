import React from 'react';
import styled from 'styled-components';
import './GlobalStyle';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Section } from 'components/Section/Section';
// import ContactForm from 'components/ContactForm/ContactForm';
import Form from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import Filter from 'components/Filter/Filter';

const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

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

  auditContact = auditNewContact => {
    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === auditNewContact.name.toLowerCase()
    );
  };

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
      <Box
        m="25px"
        bg="firstBgColor"
        color="mainTextColor"
        p={4}
        pl={5}
        pr={5}
        width="360px"
        fontFamily="Ubuntu"
        fontSize={16}
        ml="auto"
        mr="auto"
        border="2px solid"
        borderRadius={16}
      >
        <Title>Phonebook</Title>
        <Section>
          <Form onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredPhoneBook}
            onDeletContact={this.deletContact}
          />
        </Section>
      </Box>
    );
  }
}

export default App;
