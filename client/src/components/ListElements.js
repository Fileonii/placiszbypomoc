import React, { Fragment, useEffect, useState } from "react";

const ListElements = () => {
  return (
    <Fragment>
      <table class="table mt-4">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Imie</th>
            <th scope="col">Zadluzenie</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListElements;
