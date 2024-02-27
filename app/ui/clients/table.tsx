import Search from '@/app/ui/search';
import { PencilIcon, PowerIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '../button';
import { Client } from '@/app/lib/data/Client';

export default async function ClientsTable({ clients }: { clients: Client[] }) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className={` mb-8 text-xl md:text-2xl`}>Clientes</h1>
        <Button>Agregar Cliente</Button>
      </div>
      <Search placeholder="Buscar Mascota..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {clients?.map((client) => (
                  <div
                    key={client._id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <Link href={'clients/detail'}>
                            <p className="font-bold">{client.name}</p>
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500">
                          {client.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">DNI</p>
                        <p className="font-medium">{client.dni}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Teléfono</p>
                        <p className="font-medium">{client.phone}</p>
                      </div>
                    </div>
                    {/* <div className="pt-4 text-sm">
                      <p>
                        {pet.client.name} {pet.client.lastName}
                      </p>
                    </div> */}
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
                      Apellido
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-5 text-center font-medium"
                    >
                      DNI
                    </th>
                    <th
                      scope="col"
                      className="te px-3 py-5 text-center font-medium"
                    >
                      Teléfono
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
                  {clients.map((client) => (
                    <tr key={client._id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-center text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <Link href={'clients/detail'}>
                          <p className="text-indigo-500 underline">
                            {client.name}
                          </p>
                        </Link>
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {client.lastName}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {client.dni}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-center text-sm">
                        {client.phone}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        <div className="flex justify-center">
                          <Link href={'clients/detail'}>
                            <PencilIcon className="mx-2 w-4 text-indigo-600" />
                          </Link>
                          <Link href={'/'}>
                            <TrashIcon className="mx-2 w-4 text-indigo-600" />
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
