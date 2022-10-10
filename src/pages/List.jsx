import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../componants/Header';
import { DateRange } from 'react-date-range';
import NavBar from '../componants/NavBar';
import SearchItem from '../componants/SearchItem';
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.options);

  console.log(
    setDestination(location.state.destination),
    setOption(location.state.options)
  );
  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle"> Search</h1>
            <div className="lsItem">
              <label> Destination: </label>
              <input
                type="text"
                placeholder={destination}
                value={destination}
              ></input>
            </div>
            <div className="lsItem">
              <label> Check In Date: </label>
              {/* <input type="text" className=""></input> */}
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  range={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label> Options : </label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per ninght </small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per ninght </small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adults <small>per ninght </small>
                  </span>
                  <input min={1} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Childrans <small>per ninght </small>
                  </span>
                  <input min={0} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room <small>per ninght </small>
                  </span>
                  <input min={1} type="number" className="lsOptionInput" />
                </div>
              </div>
            </div>
            <button> Search </button>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
