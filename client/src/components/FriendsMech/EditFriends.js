import React, { Fragment, useEffect, useState } from "react";
import {Button, Modal} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const EditFriends = (props) => {

  //const id = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [kolega_imie, setImie] = useState();
  const [kolega_zadluzenie, setZadluzenie] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const updateFriends = async () => {
    try {
      const body = { kolega_imie, kolega_zadluzenie };
      const response = await fetch(`http://localhost:5000/friends/${props.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(`${response} - DODANO!`)

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const CustomDateImput = ({ value, onClick }) => (
    <input
      type="text"
      class="form-control"
      id="name"
      placeholder="Imie"
      value={value}
      onClick={onClick}
    />
  );

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Edytuj
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edytowanie danych</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Fragment>
            <form onSubmit={updateFriends}>
              <div className="">
                <div class="form-group px-5">
                  <label for="name">Imie Kolegi</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Imie"
                    value={kolega_imie}
                    onChange={(e) => setImie(e.target.value)}
                  />
                </div>
                <div class="form-group px-5">
                  <label for="zadluzenie">Zadłużenie</label>
                  <input
                    type="number"
                    class="form-control"
                    id="zadluzenie"
                    placeholder="Kwota"
                    value={kolega_zadluzenie}
                    onChange={(e) => setZadluzenie(e.target.value)}
                  />
                </div>
                <div class="form-group px-5">
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
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EditFriends;