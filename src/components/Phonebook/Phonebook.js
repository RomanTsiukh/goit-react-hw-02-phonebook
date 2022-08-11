import React from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Box = styled.div``;

class Phonebook extends React.Component {
  state = {
    contacts: [],
  };

  addContact = (text, number) => {
    console.log(text, number);

    const contact = {
      id: nanoid(),
      text,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Box>
        <Form onSubmit={this.addContact} />
        <Contacts contacts={this.state.contacts} />
      </Box>
    );
  }
}

export default Phonebook;
