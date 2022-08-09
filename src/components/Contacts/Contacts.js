import React from 'react';

class Contacts extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  clickBtnAdd = () => {
    this.setState(prevState => ({
      contacts: prevState.contacts + 1,
    }));
  };

  // handleNameChange = event => {
  //     this.setState({name: event.currentTarget.value})
  //   }
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button type="button" onClick={this.clickBtnAdd}>
          Add contact
        </button>
        <ul>
          <li>{this.state.contacts}</li>
        </ul>
      </div>
    );
  }
}

export default Contacts;
