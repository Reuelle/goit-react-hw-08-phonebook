import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contact';
import { selectContacts } from 'redux/selector';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) || []; // Ensure contacts is an array

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
    form.reset();

    if (!name || !number) {
      alert("Both name and number are required.");
      return;
    }

    // Check for duplicate contact names
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    // Dispatch action to add new contact
    dispatch(addContact({ name, number }));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>
        Name
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\s'-]+$"
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
          placeholder="Enter name"
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="^\+?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +."
          required
          placeholder="Enter phone number"
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
