import Breadcrumbs from '../ui/invoices/breadcrumbs';

function Dashboard() {
  const mockData2: any[] = [
    {
      label: '',
      href: '/',
      active: true,
    },
  ];
  return (
    <div>
      <Breadcrumbs breadcrumbs={mockData2} />
    </div>
  );
}
export default Dashboard;
