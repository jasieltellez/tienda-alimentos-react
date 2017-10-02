import React from 'react';

import './Details.css';


class Details extends React.Component {
  render() {
    return (
    <div className=" details-container ">
    <h4>Aguacate</h4>
    <div className="divider"></div>
      <div className="row">
        <div className="col l12">
          <div className="col l6">
            <img className="col l12 responsive-img"src="/image/aguacate.jpg" alt="ag"/>
          </div>
          <div className="col l6">
            <p>Precio:CLP200</p>
            <p>Cantidad Disponible:1000</p>
          </div>
        </div>
        </div>
    <a href="../home" className="btn">Atras</a>
    </div>


    );
  }
}

export default Details;
