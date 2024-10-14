import ContactForm from '../components/ContactForm';

export default function AddContact() {
  const handleSave = (contactData) => {
    // Add save logic here
    alert(`Contact saved: ${JSON.stringify(contactData)}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Add New Contact</h1>
      <ContactForm onSave={handleSave} />
    </div>
  );
}
