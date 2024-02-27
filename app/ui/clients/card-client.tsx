import Avatar from '../common/avatar';

function CardClient() {
  return (
    <div className="w-auto rounded-xl bg-white p-4 shadow-md">
      <Avatar text="GA" size="m" />
      <h2 className="text-center text-3xl font-bold text-black">{'Juan'}</h2>
      <p className="py-2 text-center  text-2xl font-bold text-gray-500">
        DNI 34.546.234
      </p>
      <div className="grid grid-cols-1">
        <p className="flex justify-center p-2">
          <b>Teléfono:</b>
          <span className="mx-2"> 4 años</span>
        </p>
        <p className="flex justify-center p-2">
          <b>Email:</b>
          <span className="mx-2"> {'aa'}</span>
        </p>
        <p className="flex justify-center p-2">
          <b>Dirección:</b>
          <span className="mx-2"> {'aa'}</span>
        </p>
      </div>
    </div>
  );
}
export default CardClient;
