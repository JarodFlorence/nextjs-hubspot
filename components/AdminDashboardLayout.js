function AdminDashboardLayout({ children }) {
    return (
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <div className="bg-blue-900 text-blue-100 w-1/5 fixed h-full">
          <h3 className="text-2xl p-4 border-b border-blue-800">Admin Menu</h3>
          <ul className="text-sm space-y-4 p-4">
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#users">Users</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </div>
  
        {/* Content Area */}
        <div className="w-4/5 ml-auto p-8">
          {/* Header */}
          <header className="flex justify-between items-center p-4 border-b">
            <h2 className="text-2xl">Dashboard</h2>
            <nav>
              <a href="#profile" className="text-blue-700">Profile</a>
              <a href="#logout" className="ml-4 text-blue-700">Logout</a>
            </nav>
          </header>
  
          {/* Main Content */}
          <main className="p-4">
            {children}
          </main>
  
          {/* Footer */}
          <footer className="border-t p-4">
            <p>&copy; 2023 Your Company</p>
          </footer>
        </div>
      </div>
    );
  }
  
  export default AdminDashboardLayout;
  