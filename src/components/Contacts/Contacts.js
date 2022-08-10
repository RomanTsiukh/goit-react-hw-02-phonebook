export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, text }) => {
        return (
          <li key={id}>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
}
