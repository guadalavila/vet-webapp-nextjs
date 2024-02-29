interface IBadgeProps {
  label: string;
  color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
}

function Badge({ label, color }: IBadgeProps) {
  const colorClasses = {
    gray: 'bg-gray-100 text-gray-600 ring-gray-500',
    red: 'bg-red-100 text-red-700 ring-red-600',
    yellow: 'bg-yellow-100 text-yellow-800 ring-yellow-600',
    green: 'bg-green-100 text-green-700 ring-green-600',
    blue: 'bg-blue-100 text-blue-700 ring-blue-700',
    indigo: 'bg-indigo-100 text-indigo-700 ring-indigo-700',
    purple: 'bg-purple-100 text-purple-700 ring-purple-700',
    pink: 'bg-pink-100 text-pink-700 ring-pink-700',
  };
  const colorClass = colorClasses[color];

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${colorClass} ring-1 ring-inset ring-opacity-10`}
    >
      {label}
    </span>
  );
}
export default Badge;
