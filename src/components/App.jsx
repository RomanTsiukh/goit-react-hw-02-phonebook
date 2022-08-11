import { GlobalStyle } from 'components/GlobaleStyle';
import Phonebook from './Phonebook/Phonebook';
import styled from 'styled-components';

const Container = styled.div``;

export const App = () => {
  return (
    <Container
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        padding: 20,
      }}
    >
      <GlobalStyle />
      <Phonebook />
    </Container>
  );
};
