import { Client } from '@/app/lib/data/Client';
import ClientsTable from '@/app/ui/clients/table';

function Clients() {
  const mockData: Client[] = [
    {
      _id: '6554dfed10466c584f7c20c4',
      vetId: '6553d6228bee0dddb6956c55',
      name: 'Peteco ',
      lastName: 'Carabajal ',
      dni: '25580693',
      email: 'Peteco@gmail.com',
      phone: '+543874117566',
      address: 'Palmeras 123',
      createdAt: '2023-11-15T15:12:45.847Z',
      updatedAt: '2023-11-15T15:12:45.847Z',
    },
  ];
  return (
    <div>
      <ClientsTable clients={mockData}></ClientsTable>
    </div>
  );
}
export default Clients;
