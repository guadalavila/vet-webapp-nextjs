import { HTMLAttributes } from 'react';

interface IAvatarProps {
  size: 's' | 'm' | 'l';
  text: string;
  bg?: string | undefined;
}

function Avatar({ size, bg = 'bg-indigo-600', text }: IAvatarProps) {
  return (
    <div
      className={`${size === 's' ? 'h-9 w-9' : size === 'm' ? 'h-24 w-24' : 'h-48 w-48'} mx-auto mb-4 flex h-24 w-24 justify-center rounded-full  ${bg}`}
    >
      <p className="self-center text-center text-3xl font-bold text-white">
        {text}
      </p>
    </div>
  );
}
export default Avatar;
