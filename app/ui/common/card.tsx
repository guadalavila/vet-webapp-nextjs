import { CSSProperties } from 'react';

interface ICardProps {
  children: React.ReactNode;
  styles?: string;
}

function Card({ children, styles }: ICardProps) {
  return (
    <div className={` w-auto rounded-xl bg-white p-4 shadow-md ${styles}`}>
      {children}
    </div>
  );
}
export default Card;
