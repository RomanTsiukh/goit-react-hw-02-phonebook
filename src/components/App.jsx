import { GlobalStyle } from 'components/GlobaleStyle';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      }}
    >
      <GlobalStyle />
      <Phonebook />
    </div>
  );
};
