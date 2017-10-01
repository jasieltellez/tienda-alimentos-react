import React, { Component } from 'react';

import './Catalogo.css';


class Catalogo extends Component {
  render() {
    return (

    <div className=" catalogo-container ">

      <div className="row">
        <div className="col l6">
          <h5>Catálogo de Productos</h5>
        </div>
        <div className="col l3 offset-l3 search">
          <label htmlFor="search-input" >¿Quá estás buscando?</label>
          <input type="text" name="search-input"   placeholder="Buscar"/ >
        </div>
      </div>
      <div className="divider"></div>

      <div className=" row">
        <div className="col l12">
          <div className="card col l3" >
            <div className="card-image">
              <img className="col l12"src="/image/aguacate.jpg" alt="imagen"/>
            </div>
            <div className="col l12 card-content">
              <h5>Aguacate</h5>
              <p>Precio: CLP200</p>
              <p>Disponibles: 1000</p>
            </div>
            <div className="col l12 card-action">
              <a  className="btn col l5"type="button" name="aguacate" href="./home/details" >Ver mas</a>
              <a className="btn col l5"type="button" name="aguacate">Añadir</a>
              <input type="number" className="col l4 cantidad"  max="1000" min="1"/>

            </div>
          </div>

        </div>

      </div>
    </div>


    );
  }
}

export default Catalogo;
