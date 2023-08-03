function AdminDashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-blue-100 w-1/5 fixed h-full overflow-y-auto">
        <h3 className="text-3xl p-4 border-b border-gray-200">Admin Menu</h3>
        <ul className="text-sm space-y-4 p-4">
          <li>
            <a href="/admin/dashboard" className="flex items-center p-2 hover:bg-blue-800 rounded">
              <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="/admin/users" className="flex items-center p-2 hover:bg-blue-800 rounded">
              <i className="fas fa-users mr-2"></i> Users
            </a>
          </li>
          <li>
            <a href="/admin/contacts" className="flex items-center p-2 hover:bg-blue-800 rounded">
              <i className="fas fa-address-book mr-2"></i> Contacts
            </a>
          </li>
          <li>
            <a href="/admin/settings" className="flex items-center p-2 hover:bg-blue-800 rounded">
              <i className="fas fa-cogs mr-2"></i> Settings
            </a>
          </li>
        </ul>
      </div>
      {/* Content Area */}
      <div className="w-4/5 ml-auto p-8">
        {/* Header */}
        <header className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl">Dashboard</h2>
          <nav>
            <a href="/admin/profile" className="text-blue-700 hover:text-blue-900">Profile</a>
            <a href="#logout" className="ml-4 text-blue-700 hover:text-blue-900">Logout</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="p-4 bg-white shadow rounded">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t p-4 mt-8">
          <p className="text-gray-600">&copy; 2023 Your Company</p>
        </footer>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
