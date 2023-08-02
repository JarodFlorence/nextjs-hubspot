import AdminDashboardLayout from '../../components/AdminDashboardLayout';
import { useState } from 'react';

function ProfilePage() {
  // Sample user profile data, replace with real data from your backend
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    username: 'john_doe',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Profile updated:', profile);
  };

  return (
    <AdminDashboardLayout>
      <h3 className="text-xl mb-4">Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 p-2 w-full border rounded-md"
            value={profile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="mt-1 p-2 w-full border rounded-md"
            value={profile.username}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white rounded"
        >
          Update Profile
        </button>
      </form>
    </AdminDashboardLayout>
  );
}

export default ProfilePage;
