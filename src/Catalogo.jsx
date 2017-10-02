import React from 'react';
import * as request from 'superagent';
import './Catalogo.css';


class Catalogo extends React.Component {
  constructor(){
  super()
  this.state={Productos:[{}]}
  }
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
        {this.state.Productos.map((prod, i) =>

                              <div className="card col l3" >
                                  <div className="card-image">
                                    <img className="col l12" src={'image/'+prod.nombre+'.jpg'} alt="imagen"/>
                                  </div>
                                  <div className="col l12 card-content">
                                    <h5>{prod.nombre}</h5>
                                    <p>Precio: CLP{prod.precio}</p>
                                    <p>Disponibles: {prod.disponible}</p>
                                  </div>
                                  <div className="col l12 card-action">
                                    <a  className="btn col l5"type="button" name="{prod.nombre}" href="./home/details" >Ver mas</a>
                                    <a className="btn col l5"type="button" name="{prod.nombre}">Añadir</a>
                                    <input type="number" className="col l4 cantidad"  max={prod.disponible} min="1"/>

                                  </div>
                              </div>
        )}

          </div>
      </div>
  </div>
    );
}

componentWillMount(){

request
.get(' https://tienda-alimentos.firebaseio.com/.json')
.end((err,res)=>{
this.setState(res.body)
console.log(this.state)
}

)}


}

export default Catalogo;
