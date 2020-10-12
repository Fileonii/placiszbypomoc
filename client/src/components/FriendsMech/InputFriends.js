import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const InputFriends = () => {
  const [kolega_imie, setImie] = useState();
  const [kolega_zadluzenie, setZadluzenie] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { kolega_imie, kolega_zadluzenie };
      const response = await fetch("http://localhost:5000/friends", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const CustomDateImput = ({ value, onClick }) => (
    <input
      type="text"
      className="form-control"
      id="name"
      placeholder="Imie"
      value={value}
      onClick={onClick}
    />
  );

  return (
    <Fragment>

      <form onSubmit={onSubmitForm}>
        <div className="d-flex justify-content-center mt-5">
          <div className="form-group px-5">
            <label for="name">Imie Kolegi</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Imie"
              value={kolega_imie}
              onChange={(e) => setImie(e.target.value)}
            />
          </div>
          <div className="form-group px-5">
            <label for="zadluzenie">Zadłużenie</label>
            <input
              type="number"
              className="form-control"
              id="zadluzenie"
              placeholder="Kwota"
              value={kolega_zadluzenie}
              onChange={(e) => setZadluzenie(e.target.value)}
            />
          </div>
          <div className="form-group px-5">
            <label for="data">Do kiedy ma byc oddane</label><br></br>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              customInput={<CustomDateImput/>}
            ></DatePicker>
          </div>
        </div>
        <div className="form-button mt-3 text-center">
          <button type="submit" class="btn-lg btn-primary center-block">
            Submit
          </button>
        </div>
      </form>


    </Fragment>
    
  );
};

export default InputFriends;
