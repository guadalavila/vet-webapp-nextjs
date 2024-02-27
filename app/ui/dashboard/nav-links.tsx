'use client';

import {
  UserGroupIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Mascotas',
    href: '/dashboard/pets',
    icon: UserIcon,
  },
  { name: 'Clientes', href: '/dashboard/clients', icon: UserGroupIcon },
  { name: 'Configuración', href: '/dashboard/setting', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-indigo-600 md:flex-none md:justify-start md:p-2 md:px-3
            ${link.href === pathName ? 'bg-sky-100 text-indigo-600' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
