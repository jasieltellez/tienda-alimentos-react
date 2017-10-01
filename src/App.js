import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="row">
            <form id="formLogin"  className="col l8">
              <div className="row">
                <h4>Iniciar Sesión</h4>

              <div className="row">
                <div className="input-field col l8">
                  <input id="email" type="email" className="validate" required/>
                  <label for="email"data-error="Inserte Email válido" data-success="Correcto">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col l8">
                  <input id="password" type="password" className="validate" required />
                  <label for="password" data-error="Rellenar" data-success="Correcto">Conraseña</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col l4">
                  <a className="btn " href="#" >Ingresar</a>
                </div>
              </div>
        </div>
            </form>
          </div>

      </div>

      </div>
    );
  }
}

export default App;
