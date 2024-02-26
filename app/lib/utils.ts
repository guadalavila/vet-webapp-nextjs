import { COLOR_PET } from './const';
import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

const mapPetSpecie = () => {
  const mapGender = new Map();
  mapGender.set('canine', 'Canino');
  mapGender.set('feline', 'Felino');
  mapGender.set('equine', 'Equino');
  mapGender.set('bird', 'Aves');
  mapGender.set('rabbit', 'Conejo');
  mapGender.set('porcine', 'Porcino');
  mapGender.set('ferret', 'Huron');
  mapGender.set('insect', 'Insecto');
  mapGender.set('rodent', 'Roedor');
  mapGender.set('other', 'Otro');
  mapGender.set('', '');
  return mapGender;
};

export const getSpeciePet = (specie: string) => mapPetSpecie().get(specie);

const mapPetSize = () => {
  const mapSize = new Map();
  mapSize.set('small', 'Chico');
  mapSize.set('medium', 'Mediano');
  mapSize.set('big', 'Grande');
  mapSize.set('other', 'Otro');
  mapSize.set('', '');
  return mapSize;
};

export const getPetSize = (size: string) => {
  return mapPetSize().get(size);
};

const mapPetGender = () => {
  const mapGender = new Map();
  mapGender.set('male', 'Macho');
  mapGender.set('female', 'Hembra');
  mapGender.set('unknow', 'Desconocido');
  mapGender.set('', '');
  return mapGender;
};

export const getPetGender = (gender: string) => {
  return mapPetGender().get(gender);
};

export function getConditionColor(condition: string): string {
  const conditionColorMap = new Map();
  conditionColorMap.set('Ciego', '#FFBF00');
  conditionColorMap.set('Sordo', '#FF7F50');
  conditionColorMap.set('Asmatico', '#593c8f');
  conditionColorMap.set('Preñez', '#40E0D0');
  conditionColorMap.set('Pancreatitis Cronica', '#6495ED');
  conditionColorMap.set('Sobrepeso', '#78c091');
  conditionColorMap.set('Alérgico', '#9a348e');
  conditionColorMap.set('Insulinodependiente', '#00B295');
  conditionColorMap.set('Hepatico', '#4281a4');
  conditionColorMap.set('Diabetico', '#e57a44');
  conditionColorMap.set('Obeso', '#afa2ff');
  conditionColorMap.set('Renal', '#f56416');
  return conditionColorMap.get(condition);
}

export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const getCodeColor = (name: string) => {
  return COLOR_PET.find((x) => x.value === name)?.code;
};
