import { Link } from "react-router";
import React, { Fragment } from "react";
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';


import {fbAuth} from '../../firebase/firebase';

const LoginPage = () => {


    return( 
    <Fragment>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                            <h5 class="card-title text-center">Sign In</h5>
                            <form class="form-signin">
                            <div class="form-label-group m-3">
                                <input type="login" id="inputLogin" class="form-control" placeholder="Login" required autofocus/>
                            </div>

                            <div class="form-label-group m-3">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={fbAuth}>LOGIN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};

export default LoginPage;