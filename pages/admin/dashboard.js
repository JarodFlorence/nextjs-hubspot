import { Chart as ChartJS } from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';
import AdminDashboardLayout from '../../components/AdminDashboardLayout';

function DashboardPage() {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [10, 20, 15, 30, 25, 35],
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Inventory',
        data: [200, 150, 300],
        backgroundColor: ['red', 'green', 'blue'],
      },
    ],
  };

  return (
    <AdminDashboardLayout>
      <h3 className="text-xl mb-4">Dashboard</h3>
      <div className="grid grid-cols-2 gap-4">
        {/* Line Chart for Sales */}
        <div className="bg-white p-4 border rounded">
          <h4 className="mb-4 text-lg">Monthly Sales</h4>
          <Line data={lineChartData} />
        </div>

        {/* Bar Chart for Inventory */}
        <div className="bg-white p-4 border rounded">
          <h4 className="mb-4 text-lg">Inventory by Product</h4>
          <Bar data={barChartData} />
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

export default DashboardPage;
