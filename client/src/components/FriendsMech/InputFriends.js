import React, { Fragment, useState } from "react";

const InputFriends = () => {
  const [kolega_imie, setImie] = useState();
  const [kolega_zadluzenie, setZadluzenie] = useState();

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

  return (
    <Fragment>

      <form onSubmit={onSubmitForm}>
        <div className="d-flex justify-content-center mt-5">
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
