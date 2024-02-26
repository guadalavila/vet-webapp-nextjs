import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import LoginForm from './ui/login/login-form';

export default function Page() {
  return (
    <main>
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <LoginForm />
      </div>
    </main>
  );
}
