import React from 'react';
import { Link } from 'react-router';


const Sidebar = (props) => {

  return (
    <div>
      <hr />
      <div>
        <Link to='/eyeglasses' >EYEGLASSES</Link>
      </div>
      <br />

      <div>
        <Link to='/sunglasses'>SUNGLASSES</Link>
      </div>
      <br />

      <div>
        <Link to='/'>ALL MODELS</Link>
      </div>

      <hr />

    </div>
  );
}

export default Sidebar;


