import React from 'react';
import * as request from 'superagent'


import './App.css';

class App extends React.Component {
  constructor(){
    super()

  }

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
                  <label htmlFor="email"data-error="Inserte Email válido" data-success="Correcto">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col l8">
                  <input id="password" type="password" className="validate" required />
                  <label htmlFor="password" data-error="Rellenar" data-success="Correcto">Conraseña</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col l4">
                  <a className="btn " onClick={this.verificarLogin} >Ingresar</a>
                </div>
              </div>
        </div>
            </form>
          </div>

      </div>

      </div>
    );
  }

verificarLogin(){

  request
  .get(' https://tienda-alimentos.firebaseio.com/.json')
  .end((err,res)=>{
    for (let user of res.body.Usuarios) {
      if (user.username===document.getElementById('email').value && user.pass===document.getElementById('password').value) {

          window.location.replace('./home')

        return
      }

    }
    alert('Usuario o contraseña incorrecto')
    })
}
componentWillMount(){
  sessionStorage.setItem('kart',null)
  sessionStorage.setItem('prodDetails',null)
}
}

export default App;
