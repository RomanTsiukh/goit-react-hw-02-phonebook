import { GlobalStyle } from 'components/GlobaleStyle';
import Contacts from './Contacts/Contacts';

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
      <Contacts />
    </div>
  );
};
