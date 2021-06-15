export const getTotalDaysByMonthAndYear = (month: number, year: number): number[] => {
  const numberOfDays: number = new Date(year, month + 1, 0).getDate();
  const days = [];

  for(let i=1; i <= numberOfDays; i++) {
    days.push(i);
  }

  return days;
};

export const getTotalMonths = (): string [] => {
  const totalMonths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  return totalMonths;
};

export const getTotalYearsByCurrentYearAndRange = (currentYear: number, range: number): number[] => {
  const totalYears = [];

  for(let i=currentYear; i>=currentYear - range; i--) {
    totalYears.push(i);
  }

  return totalYears;
};
