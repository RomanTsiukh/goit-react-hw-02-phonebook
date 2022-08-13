import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContactItem } from './ContactItem';

const List = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
`;

export default function Contacts({ contacts }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </List>
  );
}

Contacts.prototype = {
  id: PropTypes.string.isRequired,
};
