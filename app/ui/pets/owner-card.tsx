import Avatar from '../common/avatar';
import Title from '../common/title';

function OwnerCard() {
  return (
    <div className="w-auto rounded-xl bg-white p-4 shadow-md md:mt-4">
      <Title text="Responsable" />
      <Avatar size="m" bg="bg-indigo-500" text="GA" />
      <div>
        <p className="text-center text-2xl font-bold">Guadalupe Alavila</p>
        <p className="text-1xl  text-center font-medium">38.765.456</p>
      </div>
    </div>
  );
}
export default OwnerCard;
