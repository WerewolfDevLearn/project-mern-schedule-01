import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Modal from '../Modal/Modal';

import Calendar from './Calendar/Calendar';
import InputDate from './Input';

import { DatepickerContext } from './DaypickerContext';

export function DatePicker({ labelTex }) {
  const { currentDate } = useParams();
  const arrdate = currentDate.split('-');

  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const closeModal = () => {
    setShow(false);
  };

  const inputValue = `${arrdate[0]}-${arrdate[1]}-${arrdate[2]}`;

  const onClickHandler = () => {
    setShow(true);
  };

  return (
    <>
      <DatepickerContext.Provider value={setSelectedDate}>
        <div className="datepicker-wrapper">
          <InputDate inputValue={inputValue} onClickHandler={onClickHandler} labelTex={labelTex} />

          {show && (
            <Modal onClose={closeModal} clickable={true} color="transparent">
              <Calendar />
            </Modal>
          )}
        </div>
      </DatepickerContext.Provider>
    </>
  );
}

DatePicker.propTypes = {
  labelTex: PropTypes.string
};
