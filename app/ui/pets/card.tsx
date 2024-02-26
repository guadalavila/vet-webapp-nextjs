import { Pet } from '@/app/lib/data/Pet';
import { getPetGender, getPetSize } from '@/app/lib/utils';
import Button from '../common/button';

interface ICardProps {
  pet: Pet;
}

function Card({ pet }: ICardProps) {
  return (
    <div className="w-auto rounded-xl bg-white p-4 shadow-md">
      <div className="mx-auto mb-4 h-24 w-24 justify-center  rounded-full bg-indigo-600 "></div>
      <h2 className="text-center text-4xl font-bold text-black">{pet.name}</h2>
      <p className="py-2 text-center  text-2xl font-bold text-gray-600">
        {pet.breed}
      </p>
      <div className="my-3 flex justify-center">
        <Button>Nueva Visita</Button>
      </div>
      <div className="divide-y"></div>
      <div className="grid grid-cols-1 divide-y">
        <p className="flex justify-center p-2">
          <b>Edad:</b>
          <span className="mx-2"> 4 años</span>
        </p>
        <p className="flex justify-center p-2">
          <b>Sexo:</b>
          <span className="mx-2"> {getPetGender(pet.gender)}</span>
        </p>
        <p className="flex justify-center p-2">
          <b>Tamaño:</b>
          <span className="mx-2"> {getPetSize(pet.size)}</span>
        </p>
        <p className="flex justify-center p-2">
          <b>Color:</b>
          <span className="mx-2"> 4 años</span>
        </p>
      </div>
    </div>
  );
}
export default Card;
