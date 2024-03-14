import React, { useRef, useState } from 'react';

import { format, isValid, parse } from 'date-fns';
import FocusTrap from 'focus-trap-react';
import { DayPicker } from 'react-day-picker';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { rgba } from 'polished';

const DatePickerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  >div {
    width:300px;
  }
  .DayPickerInput-Overlay {
    top: 4px;
  }
  .DayPicker-Day {
    padding: 0.35rem 0.5rem;
  }
  .DayPicker-Day--today {
    color: ${({ theme }) => theme.colors.primary};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .rdp-caption *{
    color:${rgba("#000",.7)};
  }
  .dialog-sheet{
    background:#fff;
  }
  .rdp-day_selected:not([aria-disabled='true']), .rdp-day_selected:focus:not([aria-disabled='true']), .rdp-day_selected:active:not([aria-disabled='true']), .rdp-day_selected:hover:not([aria-disabled='true']) {
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    border-color:${({ theme }) => theme.colors.primary};
}
  .rdp-day_selected{
    border-radius: 50%;
    text-align: center;
    display: table-cell;
    padding: 0.5em;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    color: rgb(240, 248, 255);
  }
  .rdp-button.rpd-day:focus{
    background-color: ${({ theme }) => theme.colors.primary};
    border-color:${({ theme }) => theme.colors.primary};
    color:#fff;
  }
  .rdp-button:active{
    border-color: var(--rdp-background-color);
  }
  .rdp-nav_button:focus{
    border-color: var(--rdp-background-color);
  }
  input{
    border:0px!important;
    width:100%;
    padding-left:50px;
    &:focus,
    &:focus-visible{
      border:0px!important;
      outline:0px;
    }
  }
`;

const DatePickerComponent = ({ className }) => {
  const date = new Date();
  const [selected, setSelected] = useState();
  const [inputValue, setInputValue] = useState('');
  const [isPopperOpen, setIsPopperOpen] = useState(false);

  const popperRef = useRef(null);
  const buttonRef = useRef(null);
  const [popperElement, setPopperElement] = useState(
    null
  );


  
  const popper = usePopper(popperRef.current, popperElement, {
    placement: 'bottom-start'
  });

  const closePopper = () => {
    setIsPopperOpen(false);
    buttonRef?.current?.focus();
  };

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, 'y-MM-dd', new Date());
    if (isValid(date)) {
      setSelected(date);
    } else {
      setSelected(undefined);
    }
  };

  const handleButtonClick = () => {
    if (!isPopperOpen) {
      setIsPopperOpen(true);
    }
  };

  const handleDaySelect = (date) => {
    setSelected(date);
    if (date) {
      setInputValue(format(date, 'y-MM-dd'));
      closePopper();
    } else {
      setInputValue('');
    }
  };

  return (
    <DatePickerStyled>
      <div ref={popperRef}>
        <input
          type="text"
          placeholder={format(new Date(), 'y-MM-dd')}
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleButtonClick}
          className="input-reset pa2 ma2 bg-white black ba"
        />
        
      </div>
      {isPopperOpen && (
        <FocusTrap
          active
          focusTrapOptions={{
            initialFocus: false,
            allowOutsideClick: true,
            clickOutsideDeactivates: true,
            onDeactivate: closePopper
          }}
        >
          <div
            tabIndex={-1}
            style={popper.styles.popper}
            className="dialog-sheet"
            {...popper.attributes.popper}
            ref={setPopperElement}
            role="dialog"
          >
            <DayPicker
              initialFocus={isPopperOpen}
              mode="single"
              defaultMonth={selected}
              selected={selected}
              onSelect={handleDaySelect}
            />
          </div>
        </FocusTrap>
      )}
    </DatePickerStyled>
  );
};

export default DatePickerComponent;
