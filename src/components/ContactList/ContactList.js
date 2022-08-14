import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContactItem } from './ContactItem';

const List = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[2]}px 0;
`;

const Button = styled.button`
  width: 70px;
  cursor: pointer;
  border-radius: ${p => p.theme.space[2]}px;

  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(50, 140, 17, 1);

  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.white};
    transform: scale(1.1);
  }
`;

export default function Contacts({ contacts, onDeletContact }) {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <Box key={contact.id}>
            <ContactItem name={contact.name} number={contact.number} />
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
