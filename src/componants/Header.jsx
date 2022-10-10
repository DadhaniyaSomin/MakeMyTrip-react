import React, { useState } from 'react';
import {
  faBed,
  faCalendarCheck,
  faCar,
  faCarSide,
  faEarthAmerica,
  faPerson,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [opendate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      keys: 'selection',
    },
  ]);

  const [options, setOptions] = useState({
    adults: 0,
    children: 0,
    room: 0,
  });

  console.log(
    setOptions({
      adults: 0,
      children: 0,
      room: 0,
    })
  );

  const handleOperation = (name, operation) => {
    setOpenOption((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? (options[name] += 1) : (options[name] -= 1),
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCarSide} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="headerTitle"> Find your next stay</h1>
            <p className="headerDesc">
              {' '}
              Search low prices on hotels, homes and much more...
            </p>

            <button className="headerBtn"> Sign in / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon className="faIncons" icon={faEarthAmerica} />
                <input
                  type="text"
                  placeholder="Where are you going? "
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                ></input>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon className="faIncons" icon={faCalendarCheck} />
                <span
                  onClick={() => setOpenDate(!opendate)}
                  className="headerSearchText"
                >
                  {' '}
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}`}
                </span>
                {opendate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon className="faIncons" icon={faPerson} />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >
                  {' '}
                  {`${options.adults} adults - ${options.children} children -${options.room} room`}
                </span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOperation('adults', 'd')}
                        >
                          {' '}
                          -{' '}
                        </button>
                        <span className="optionCounterNumber">
                          {options.adults}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOperation('adults', 'i')}
                        >
                          {' '}
                          +{' '}
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOperation('children', 'd')}
                        >
                          {' '}
                          -{' '}
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOperation('children', 'i')}
                        >
                          {' '}
                          +{' '}
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOperation('room', 'd')}
                        >
                          {' '}
                          -{' '}
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOperation('room', 'i')}
                        >
                          {' '}
                          +{' '}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={() => handleSearch()}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
