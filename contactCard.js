import Link from 'next/link';

const ContactCard = ({ contact, onDelete }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{contact.first_name} {contact.last_name}</div>
        <p className="text-gray-700 text-base">Email: {contact.email}</p>
        <p className="text-gray-700 text-base">Mobile: {contact.mobile_number}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link href={`/contact/${contact.id}`}>
          <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">View/Edit</a>
        </Link>
        <button onClick={() => onDelete(contact.id)} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
