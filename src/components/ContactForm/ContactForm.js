import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box } from '../Box';
import * as yup from 'yup';

const nameError = 'Invalid name';
const numberError = 'Invalid number';
const requiredError = 'This field is required';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(requiredError)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      nameError
    ),
  number: yup
    .string()
    .required(requiredError)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      numberError
    ),
});

const Error = styled.div`
  margin-left: 90px;
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.offlineColor};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

const ButtonAddContact = styled.button`
  display: flex;
  margin-left: auto;
  width: 100px;
  justify-content: center;
  cursor: pointer;

  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[1]}px;
  box-shadow: -1px 1px 4px 0px rgba(50, 140, 17, 1);
  transition: background-color 250ms cubic-bezier(0.2, 0, 0, 0.7),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.hoverBgColor};
    color: ${p => p.theme.colors.white};
    transform: scale(1.1);
  }
`;

const initialValue = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValue} validationSchema={schema}>
      <Form onSubmit={onSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <h3>Name</h3>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
        <ErrorMessage name="name" render={msg => <Error>{nameError}</Error>} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h3>Number</h3>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Box>
        <ErrorMessage
          name="number"
          render={msg => <Error>{numberError}</Error>}
        />
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
