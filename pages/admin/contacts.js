import { useState } from 'react';
import { fetchContacts } from '../../helpers/fetchContacts';
import AdminDashboardLayout from '../../components/AdminDashboardLayout';

const ContactsPage = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <AdminDashboardLayout>
      <h3 className="text-xl mb-4">Contacts</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.results?.map((contact) => (
            <tr key={contact.id}>
              <td className="py-2 px-4 border-b">{contact.properties.firstname} {contact.properties.lastname}</td>
              <td className="py-2 px-4 border-b">{contact.properties.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminDashboardLayout>
  );
};


export async function getServerSideProps(context) {
    const page = parseInt(context.query.page || '0');
    const initialContacts = await fetchContacts(page);
    return {
      props: { initialContacts },
    };
}

export default ContactsPage;
