import React, {Component} from 'react';
import './Bounce.css';

class Name extends Component{

  render(){
    return(
        <div className="container">
          <div className="x">
            <div className="y">
              <h1 className="nameText text" id="sam">Sam MacGinty</h1>
            </div>
          </div>
        </div>
      );
  }
}

export default Name;
