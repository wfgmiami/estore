import React from 'react';

const Filterbar = () => (

  <ul className="nav nav-tabs">

    <li className="dropdown"><a className="dropdown-toggle" href="#">Gender<span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
      </ul>
    </li>

      <li><a>Color</a></li>
      <li><a>Shape</a></li>
      <li><a>Material</a></li>
      <li><a>Rating</a></li>
      <li><a>Price</a></li>

  </ul>
)

export default Filterbar;


