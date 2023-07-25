/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import background from "../assets/lap.jpg";
  import './image.css'
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-10px',
        marginBottom:'-15%',
        width:'90',
        fontSize:'50px',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
       <div id='mrd'>
        <button>ONLINE&IN-STORE</button>
<h4>SPORTS SHOE COLLECTIONS</h4>
<h2>ENTIRE SHOES PURCHASE<br/>
SAVE UP TO $70</h2>
<button id='spin'>SEE THE COLLECTIONS</button>
       </div>
      </div>
    );
  }
}
   
export default App;