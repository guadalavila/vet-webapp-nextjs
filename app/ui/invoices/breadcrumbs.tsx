import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className={'flex text-xl md:text-2xl'}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={`${breadcrumb.active ? 'text-gray-900' : 'text-gray-500'} `}
          >
            <>
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                  <span className="mx-3 inline-block">/</span>
                </>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
            </>
          </li>
        ))}
      </ol>
    </nav>
  );
}
