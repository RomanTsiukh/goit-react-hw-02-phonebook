import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

// const Button = styled.button``;

export function ContactItem(props) {
  const { name, number } = props;
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      {/* <Button type="button">Delet</Button> */}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
