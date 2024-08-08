// components/ContactForm/ContactForm.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slice/contact';
import { selectContacts } from '../../redux/selector';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || [];

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>Name</label>
      <input
        className={css.formName}
        type="text"
        name="name"
        required
        placeholder="Enter name"
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        required
        placeholder="Enter phone number"
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
