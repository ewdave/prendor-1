/**
 * Created by ponty on 8/20/2015.
 */

var React = require('react');
require('./css/index.scss');

var MainApp = React.createClass({

    render(){


        return (

  <div className="index-first-banner">
  <div className="index-top">
    <div className="idx-left">
      <img src="http://localhost:3000/assets/prendor-3da97e65cce9a2437173201df80b968639adfaa70702aae0541e59e296e90939.png" className="logo-icon"/>
    </div>
    <div className="idx-right">
      <ul className="idx-nav">
        <li className="idx-nav-item">
        </li>
        <li className="idx-nav-item">
          <a className="txt" href="/login">Login</a>
          <span className="bottom"></span>



        </li>
        <li className="idx-nav-item">
          <a className="txt" href="/register">Sign Up</a>
          <span className="bottom"></span>
        </li>
        <li className="idx-nav-item">
          <span className="txt">Tour Prendor</span>
          <span className="bottom"></span>
        </li>
      </ul>
    </div>
  </div>
<img src="http://localhost:3000/assets/loginpagelarge-19d4ec38aa2e66f78b340eaf67baeedd2ee3be06eb75fb19c7692576aecf804d.jpg" className="idx-1st-img"/>



</div>




        )

    }

});


module.exports = MainApp;
