import AdminDashboardLayout from '../../components/AdminDashboardLayout';
import { useState } from 'react';

function SettingsPage() {
  const [siteName, setSiteName] = useState('My Website');
  const [allowRegistration, setAllowRegistration] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Settings updated:', { siteName, allowRegistration });
  };

  return (
    <AdminDashboardLayout>
      <h3 className="text-xl mb-4">Settings</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-600">Site Name</label>
          <input
            type="text"
            id="siteName"
            className="mt-1 p-2 w-full border rounded-md"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            <input
              type="checkbox"
              className="mr-2"
              checked={allowRegistration}
              onChange={() => setAllowRegistration(!allowRegistration)}
            />
            Allow User Registration
          </label>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded"
        >
          Save Settings
        </button>
      </form>
    </AdminDashboardLayout>
  );
}

export default SettingsPage;
