import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
`;

export default function Contacts({ contacts }) {
  return (
    <List>
      {contacts.map(({ id, text, number }) => {
        return (
          <li key={id}>
            <p>
              {text}: {number}
            </p>
          </li>
        );
      })}
    </List>
  );
}

Contacts.prototype = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
