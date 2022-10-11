import React, { Component } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormStyled,
  Label,
  Input,
  SubmitBtn,
  ErrorMsg,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(4).required(),
  number: yup.string().min(5).max(15).required(),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    this.props.onSubmit(values);
    resetForm();
  };

  //   handleChange = e => {
  //     const { name, value } = e.currentTarget;

  //     this.setState({ [name]: value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };
  render() {
    // const { name, number } = this.state;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              //   value={name}
            />
            <ErrorMsg component="div" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              //   value={number}
            />
            <ErrorMsg component="div" name="number" />
          </Label>
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormStyled>
      </Formik>
    );
  }
}

export default ContactForm;
