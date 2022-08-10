import React from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = text => {
    console.log(text);

    const contact = {
      id: nanoid(),
      text,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
