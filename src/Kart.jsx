import React from 'react';

import './Kart.css';


 class Kart extends React.Component {
 constructor(){
 super()
 this.state={Productos:[]}
 this.carrito=JSON.parse(sessionStorage.getItem('kart'))
 if(this.carrito==null){
 this.carrito=[]
 }
 }
  render() {
    return (
    <div className=" details-container ">
    <h4>Carrito de Compras</h4>
    <div className="divider"></div>
      <div className="row">
        <div className="col l12">
          <div className="col l6">
            <table>
              <tbody>
              {this.carrito.map((kart, i) =>

              <tr >
                <td>
                  <div className="row">
                    <div className="col l4">
                      <img className="col l10"src={'/image/'+kart.nombre+'.jpg'} alt=""/>

                    </div>
                    <div className="col l5">
                      <p><strong>{kart.nombre}</strong></p>
                      <p><strong>Unidades: {kart.cantidad}</strong></p>
                    </div>
                  </div>
                  <p><strong>Subtotal: CLP{kart.subtotal}</strong></p>
                </td>


              </tr>
              )}



              </tbody>
            </table>


          </div>
          <div className="col l6">
            <h5>Total: CLP2000</h5>
            <div className="row">
                <a href="./home" className="btn">Cancelar</a>
                <a  className="btn">Pagar</a>

            </div>
          </div>
        </div>
        </div>

    </div>

    );
  }
}

export default Kart;
