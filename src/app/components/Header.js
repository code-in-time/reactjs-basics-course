import React from "react";
//import PropTypes from 'prop-types';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
                <h1>{this.props.name}</h1>
              <li>
                <a href="">Home</a> {2+2}
                {[1,2].map((n, i)=>{
                    return <p key={i}>{n}</p>
                })}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes ={
    name: React.PropTypes.string
}
