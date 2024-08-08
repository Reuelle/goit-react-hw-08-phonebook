import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contact';
import { selectContacts } from 'redux/selector';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();
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
<<<<<<< HEAD
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
=======
        pattern="^[a-zA-Zа-яА-Я\s'-]+$"
>>>>>>> 8f55d70d481104a20d58d4e946fb19dc317b2727
        title="Name may contain only letters, apostrophe, dash, and spaces."
        required
        placeholder="Enter name"
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
<<<<<<< HEAD
        pattern="\+?\d{1,4}?[-\.\s]?\(?\d{1,3}?\)?[-\.\s]?\d{1,4}[-\.\s]?\d{1,4}[-\.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
=======
        pattern="\+?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +."
>>>>>>> 8f55d70d481104a20d58d4e946fb19dc317b2727
        required
        placeholder="Enter phone number"
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
