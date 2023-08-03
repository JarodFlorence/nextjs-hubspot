import { useState } from 'react';
import useSWR from 'swr';
import { fetchContacts } from '../../helpers/fetchContacts';
import AdminDashboardLayout from '../../components/AdminDashboardLayout';

const ContactsPage = () => {
  const [page, setPage] = useState(0);
  const { data, error } = useSWR(`/api/contacts?page=${page}`, () => fetchContacts(page));

  if (error) return <div>Error loading contacts</div>;
  if (!data) return <div>Loading...</div>;

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
          {data.contacts.map((contact) => (
            <tr key={contact.vid}>
              <td className="py-2 px-4 border-b">{contact.properties.firstname.value} {contact.properties.lastname.value}</td>
              <td className="py-2 px-4 border-b">{contact.properties.email.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))} disabled={page === 0}>
          Previous
        </button>
        <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={data['has-more'] !== true}>
          Next
        </button>
      </div>
    </AdminDashboardLayout>
  );
};

export default ContactsPage;
