import Link from 'next/link';
import Avatar from '../common/avatar';
import Card from '../common/card';
import Title from '../common/title';

function CardPets() {
  return (
    <div className="w-auto rounded-xl bg-white p-4 shadow-sm">
      <Title text="Mascotas" />
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 ">
        {[0].map((x) => (
          <Card
            key={x}
            styles={'my-4 md:my-0  hover:bg-gray-100 hover:shadow-1xl'}
          >
            <Link href={'/dashboard/pets/detail'}>
              <Avatar size="m" bg="bg-indigo-400" text="BO" />
              <h1 className="text-center  font-medium leading-8">Pepito</h1>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default CardPets;
