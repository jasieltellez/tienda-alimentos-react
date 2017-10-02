import React from 'react';
import * as request from 'superagent'
import './Home.css'


class Home extends React.Component {
constructor(){
super()
this.contador=JSON.parse(sessionStorage.getItem('kart')).length
if(this.contador==null)
 this.contador=0;
}
  render() {
    return (

    <div className="container">
      <div className="nav-bar"  >
      <nav>
          <div className="nav-wrapper">
            <a href="/home" className="brand-logo">La Bodega</a>
            <ul id="nav-mobile" className="right hide-on-small-and-down">
              <li><a href="/home"><i className="material-icons">apps</i></a></li>
              <li><a href='../home/kart'><i className="material-icons">shopping_cart</i> <span  className="badge">{this.contador}</span></a></li>
              <li><a href="" ><i className="material-icons">exit_to_app</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div  className="catalogo">
      {this.props.children}
      </div>

    </div>


    );
  }



}

export default Home;
