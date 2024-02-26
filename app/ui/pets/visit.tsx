'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Badge from '../common/badge';

function Visit({ isOpen = false }: { isOpen?: boolean }) {
  const [show, setShow] = useState(isOpen);
  return (
    <div className="mb-4 shadow-sm">
      <div
        className="flex justify-between rounded-t-lg bg-gray-50 p-2"
        onClick={() => setShow(!show)}
      >
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          25/07/02
        </h3>
        {show ? (
          <ChevronUpIcon className="mx-2 w-6 text-indigo-600" />
        ) : (
          <ChevronDownIcon className="mx-2 w-6 text-indigo-600" />
        )}
      </div>
      {show && (
        <div className="border border-gray-100 bg-white px-2">
          <div>
            <dl>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Peso
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Badge label="23 Kg" color="indigo" />
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Temperatura
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <Badge label="37 " color="indigo" />
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Anamnésicos
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  margotfoster@example.com
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Diagnóstico Diferencial
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  $120,000
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Tratamiento
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-bold leading-6 text-gray-900">
                  Hospitalización
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ...
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
export default Visit;
