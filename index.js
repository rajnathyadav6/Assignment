import ContactCard from '../components/ContactCard';
import Link from 'next/link';

const dummyContacts = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', mobile_number: '1234567890' },
  { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', mobile_number: '0987654321' },
];

export default function Home() {
  const handleDelete = (id) => {
    // Add delete logic here
    alert(`Delete contact with id: ${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Contacts List</h1>
      <div className="flex justify-center mb-6">
        <Link href="/add-contact">
          <a className="bg-green-500 text-white font-bold py-2 px-4 rounded">Add Contact</a>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {dummyContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
