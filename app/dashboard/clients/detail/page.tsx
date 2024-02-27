import CardClient from '@/app/ui/clients/card-client';
import CardPets from '@/app/ui/clients/card-pets';

function ClientDetail() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
      <div className="my-4 md:my-0">
        <CardClient />
      </div>
      <div className="col-span-2 ">
        <CardPets />
      </div>
    </div>
  );
}
export default ClientDetail;
