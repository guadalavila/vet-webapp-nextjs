import { GenderPet, Pet, SpeciePet } from '@/app/lib/data/Pet';
import ClientsTable from '@/app/ui/clients/table';

function Clients() {
  const mockData: Pet[] = [
    {
      _id: '6554e0a6d8743d6ff569cb3f',
      createdBy: {
        _id: '6554de8fd8743d6ff569cb1e',
        name: 'Dani',
        lastName: 'Ramirez',
      },
      vetId: '6553d6228bee0dddb6956c55',
      client: {
        _id: '6554dfed10466c584f7c20c4',
        name: 'Peteco ',
        lastName: 'Carabajal ',
      },
      name: 'Reina',
      specie: SpeciePet.Canine,
      breed: 'Duchshund ',
      gender: GenderPet.Female,
      color: 'Marrón',
      size: 'small',
      age: 6,
      sterilized: true,
      pathologies: [],
      createdAt: '2023-11-15T15:15:50.222Z',
      updatedAt: '2023-11-15T15:15:50.222Z',
    },
    {
      _id: '6553f3d04839674835f3c971',
      createdBy: {
        _id: '6553e8352550dc3c8983982d',
        name: 'Guadalupe',
        lastName: 'Alavila',
      },
      vetId: '6553d6228bee0dddb6956c55',
      client: {
        _id: '6553f2942fe11adefd326937',
        name: 'Juan',
        lastName: 'Perez',
      },
      name: 'Pupi',
      specie: SpeciePet.Canine,
      gender: GenderPet.Male,
      color: 'Marrón',
      size: 'small',
      age: 0.4,
      sterilized: true,
      pathologies: [],
      createdAt: '2023-11-14T22:25:20.591Z',
      updatedAt: '2023-11-14T23:54:42.210Z',
    },
  ];
  return (
    <div>
      <ClientsTable pets={mockData}></ClientsTable>
    </div>
  );
}
export default Clients;
