import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactForm } from '../../components/ContactForm/ContactForm'; // Correct import
import { ContactList } from '../../components/ContactList/ContactList'; // Use curly braces for named export
import { Filter } from '../../components/Filter/Filter'; // Use curly braces for named export

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
