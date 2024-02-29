import Image from 'next/image';
import Search from '@/app/ui/search';
import { Pet } from '@/app/lib/data/Pet';
import { getPetGender, getSpeciePet } from '@/app/lib/utils';
import { PencilIcon, PowerIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '../button';

export default async function PetsTable({ pets }: { pets: Pet[] }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className={` mb-8 text-xl md:text-2xl`}>Mascotas</h1>
        <Button>Agregar Mascota</Button>
      </div>
      <Search placeholder="Buscar Mascota..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {pets?.map((pet) => (
                  <div
                    key={pet._id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <Link href={'pets/detail'}>
                            <p className="font-bold">{pet.name}</p>
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500">
                          {getSpeciePet(pet.specie)}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Raza</p>
                        <p className="font-medium">{pet.breed}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Genero</p>
                        <p className="font-medium">
                          {getPetGender(pet.gender)}
                        </p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>
                        {pet.client.name} {pet.client.lastName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium sm:pl-6"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium"
                    >
                      Especie
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium"
                    >
                      Raza
                    </th>
                    <th
                      scope="col"
                      className="te px-3 py-5 text-center font-medium"
                    >
                      Genero
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium"
                    >
                      Responsable
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-5 text-center font-medium"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {pets.map((pet) => (
                    <tr key={pet._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-center text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <Link href={'pets/detail'}>
                          <p className="text-indigo-500 underline">
                            {pet.name}
                          </p>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {getSpeciePet(pet.specie)}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {pet.breed}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {getPetGender(pet.gender)}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {pet.client.name} {pet.client.lastName}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <div className="flex justify-center">
                          <Link href={'pets/detail'}>
                            <div className="mx-1 rounded-lg bg-gray-100 p-1 shadow">
                              <PencilIcon className="w-5 text-indigo-600" />
                            </div>
                          </Link>
                          <Link href={'/'}>
                            <div className="mx-1 rounded-lg bg-gray-100 p-1 shadow">
                              <TrashIcon className="w-5 text-indigo-600" />
                            </div>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
