import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContactItem } from './ContactItem';

const List = styled.ul`
  margin-top: 20px;

  font-weight: 700;
`;

const Button = styled.button``;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Contacts({ contacts, onDeletContact }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Box>
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
            <Button onClick={() => onDeletContact(contact.id)}>Delet</Button>
          </Box>
        );
      })}
    </List>
  );
}

Contacts.prototype = {
  id: PropTypes.string.isRequired,
};
