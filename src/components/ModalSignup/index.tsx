import { useState, ChangeEvent } from 'react';
import { Modal, Field } from 'src/components';
import {
  getTotalDaysByMonthAndYear,
  getTotalMonths,
  getTotalYearsByCurrentYearAndRange
} from 'src/utils';
import {
  Wrapper,
  Title,
  Description,
  Form,
  Input,
  InputFull,
  Select
} from './styled';

interface Props {
  openModal: boolean;
  closeModal: () => void;
}

export const ModalSignup: React.FC<Props> = ({
  openModal,
  closeModal
}) => {
  const date = new Date();
  const dateDay = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

  const [totalDays, setTotalDays] = useState(getTotalDaysByMonthAndYear(dateMonth, dateYear));
  const [day, setDay] = useState(dateDay);

  const handleChangeSelectDay = (event: ChangeEvent<HTMLSelectElement>) => {
    const daySelected: number = parseInt(event.target.value);
    setDay(daySelected);
  };

  const RANGE: number = 100;
  const totalYears = getTotalYearsByCurrentYearAndRange(dateYear, RANGE);
  const [year, setYear] = useState(dateYear);

  const handleChangeSelectYear = (event: ChangeEvent<HTMLSelectElement>) => {
    const yearSelected: number = parseInt(event.target.value);
    setYear(yearSelected);
    const totalDays = getTotalDaysByMonthAndYear(monthIndex, yearSelected);
    setTotalDays(totalDays);
  };

  const totalMonths = getTotalMonths();
  const [month, setMonth] = useState(totalMonths[dateMonth]);
  const [monthIndex, setMonthIndex] = useState(dateMonth);

  const handleChangeSelectMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    const monthSelected: string = event.target.value;
    setMonth(monthSelected);

    const monthIndexSelected: number = event.target.selectedIndex;
    const totalDays = getTotalDaysByMonthAndYear(monthIndexSelected, year);
    setMonthIndex(monthIndexSelected);
    setTotalDays(totalDays);
  };

  return (
    <Modal
      openModal={openModal}
      closeModal={closeModal}>
      <Wrapper>
        <Title>Registrarte</Title>
        <Description>Es rápido y fácil</Description>
        <Form>
          <Input
            name="name"
            type="text"
            placeholder="Nombre" />
          <Input
            name="lastname"
            type="text"
            placeholder="Apellido" />
          <InputFull
            name="email"
            type="email"
            placeholder="Correo electrónico" />
          <InputFull
            name="password"
            type="password"
            placeholder="Contraseña" />
          <Field label="Fecha de nacimiento">
            <Select value={day} onChange={handleChangeSelectDay}>
              { totalDays.map((day, index) => (
                <option key={index}>{day}</option>)) }
            </Select>
            <Select value={month} onChange={handleChangeSelectMonth}>
              { totalMonths.map((month, index) => (
                <option key={index}>{month}</option>)) }
            </Select>
            <Select value={year} onChange={handleChangeSelectYear}>
              { totalYears.map((year, index) => (
                <option key={index}>{year}</option>)) }
            </Select>
          </Field>
        </Form>
      </Wrapper>
    </Modal>
  );
};

ModalSignup.displayName = 'ModalSignup';
