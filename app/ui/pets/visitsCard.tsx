import Title from '../common/title';
import Visit from './visit';

function VisitCard() {
  return (
    <div className="w-auto rounded-xl bg-white p-4 shadow-sm">
      <Title text="Historia clínica" />
      {[0, 1, 3, 4].map((x, index) => {
        return <Visit key={x} isOpen={index === 0} />;
      })}
    </div>
  );
}
export default VisitCard;
