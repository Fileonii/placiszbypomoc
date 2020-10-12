import React from 'react';
import {Link} from 'react-router-dom';

import {fbAuth} from '../../firebase/firebase';




const Navigation = () => (


<ul className="nav justify-content-center mt-5">

<li className="nav-item">
  <a className="nav-link"><Link to="/">Strona Główna</Link></a>
</li>
<li className="nav-item">
  <a className="nav-link" ><Link to="/login">Sign In</Link></a>
</li>
<li className="nav-item">
  <a className="nav-link" ><Link to="/ekg">EKG</Link></a>
</li>

</ul>

);

export default Navigation;