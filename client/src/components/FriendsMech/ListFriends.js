import React, { Fragment, useEffect, useState } from "react";
import  EditFriends  from "./EditFriends"
import {Button, Modal} from 'react-bootstrap'

const ListFriends = () => {
  const [friends, setFriends] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const [kolega_id, setFriendId] = useState();

  const deleteFriends = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/friends/${id}`, {
        method: "DELETE"
      });

      window.location = "/";
      //setFriends(friends.filter((friend)=>friends.kolega_id !== id))
    } catch (error) {
      console.error(error.message);
    }
  };



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
      <table className="table mt-4">
        <thead className="thead-dark">
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
              <EditFriends id={friend.kolega_id}></EditFriends>
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger " onClick={() => deleteFriends(friend.kolega_id)}>
                  Delete
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
