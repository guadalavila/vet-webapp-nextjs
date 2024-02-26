import { GenderPet, SpeciePet } from '@/app/lib/data/Pet';
import Card from '@/app/ui/pets/card';
import VisitCard from '@/app/ui/pets/visitsCard';

function PetDetail() {
  const p = {
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
    breed: 'Mestizo',
    sterilized: true,
    pathologies: [],
    createdAt: '2023-11-14T22:25:20.591Z',
    updatedAt: '2023-11-14T23:54:42.210Z',
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="">
        <Card pet={p} />
      </div>
      <div className="col-span-2">
        <VisitCard />
      </div>
    </div>
  );
}
export default PetDetail;
