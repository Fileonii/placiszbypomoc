import React, { Fragment, useEffect, useState } from "react";

const ListFriends = () => {
  const [friends, setFriends] = useState([]);

  const getFriends = async () => {
    try {
      const response = await fetch("http://localhost:5000/friends");
      const jsonData = await response.json();

      setFriends(jsonData);
    } catch (error) {}
  };
  useEffect(() => {
    getFriends();
  }, []);
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
          {friends.map((friend) => (
            <tr key={friend.kolega_id}>
              <td>{friend.kolega_imie}</td>
              <td>{friend.kolega_zadluzenie}</td>
              <td>
                <button type="button" className="btn btn-warning " disabled>
                  Coming Soon
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-secondary " disabled>
                  Coming Soon
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListFriends;