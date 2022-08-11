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
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        );
      })}
    </List>
  );
}

Contacts.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
