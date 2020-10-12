import { Link } from "react-router";
import React, { Fragment } from "react";
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';


import {fbAuth, logout, userInfo} from '../../firebase/firebase';


const LoginPage = () => {


    return( 
    <Fragment>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                           
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={fbAuth}>LOGIN</button>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={logout}>Logout</button>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={userInfo}>UserInfo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
        
    );
};

export default LoginPage;