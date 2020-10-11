import { Link } from "react-router";
import React, { Fragment } from "react";
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';


import {fbAuth} from '../../firebase/firebase';
import InputFriends from "../FriendsMech/InputFriends";
import ListFriends from "../FriendsMech/ListFriends";

const MainView = () => {


    return( 
    <Fragment>
        <InputFriends />
        <ListFriends />
    </Fragment>
    );
};

export default MainView;