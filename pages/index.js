import AdminDashboardLayout from '../components/AdminDashboardLayout';

function DashboardPage() {
  console.log(process.env.NEXT_PUBLIC_HUBSPOT_API_KEY);
  return (
    <AdminDashboardLayout>
      <h3>Welcome to the Admin Dashboard</h3>
      {/* Additional dashboard content goes here */}
    </AdminDashboardLayout>
  );
}

export default DashboardPage;
