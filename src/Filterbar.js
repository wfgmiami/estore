import React from 'react';

const Filterbar = () => (

  <div className="form-horizontal">
    <hr />
    <div className="col-xs-3">
      <label>Gender</label>
      <select className="form-control">
        <option>All</option>
        <option>Man</option>
        <option>Woman</option>
      </select>
    </div>


    <div className="col-xs-3">
      <label>Shape</label>
      <select className="form-control">
        <option>All</option>
        <option>Rectangle</option>
        <option>Square</option>
        <option>Oval</option>
      </select>
    </div>


   <div className="col-xs-3">
      <label>Material</label>
      <select className="form-control">
        <option>All</option>
        <option>Plastic</option>
        <option>Wood</option>
        <option>Metal</option>
      </select>
    </div>


    <div className="col-xs-3">
     <label>Color</label>
      <select className="form-control">
        <option>All</option>
        <option>Black</option>
        <option>White</option>
        <option>Brown</option>
      </select>
    </div>

  </div>
)

export default Filterbar;


