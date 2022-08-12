import React from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';

const Box = styled.div``;

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ' ',
  };

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: nanoid(),
      name: name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filteredPhoneBook = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Box>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>

        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <Section title="Contacts">
          <Contacts contacts={filteredPhoneBook} />
        </Section>
      </Box>
    );
  }
}

export default Phonebook;
