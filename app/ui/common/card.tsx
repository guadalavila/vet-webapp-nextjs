import { CSSProperties } from 'react';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  styles?: string;
}

function Card({ children, styles, className, ...props }: ICardProps) {
  return (
    <div
      className={` w-auto rounded-xl bg-white p-4 shadow-md ${styles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
export default Card;
