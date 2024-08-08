// src/pages/Contacts/Contacts.jsx
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactForm from '../../components/ContactForm/ContactForm'; // Default import
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook📱</title>
        </Helmet>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;

