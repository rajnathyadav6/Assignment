import { useRouter } from 'next/router';
import ContactForm from '../../components/ContactForm';

const dummyContacts = {
  1: { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', mobile_number: '1234567890' },
  2: { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', mobile_number: '0987654321' },
};

export default function Contact() {
  const router = useRouter();
  const { id } = router.query;
  const contact = dummyContacts[id];

  const handleSave = (contactData) => {
    // Add update logic here
    alert(`Contact updated: ${JSON.stringify(contactData)}`);
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Edit Contact</h1>
      <ContactForm contact={contact} onSave={handleSave} />
    </div>
  );
}
