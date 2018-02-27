import React, { Component } from 'react';
import { Parent } from './Parent';
import { Box } from './Box';
import { Header } from './Header';
import { Home } from "./Home";
 
class Root extends Component {
  render() {
    return (
        <div className="container-fluid" className="Root">
          <Parent />
          <div className="row">
            <div className="col">
              <Box name={'my text that is sent in via prop'} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header name={'A name'} />
            </div>
            <div className="col-xs-10 col-xs-offset-1">
              <Home initialAge={2}>
                <p>this my text</p>
              </Home>
            </div>
          </div>
        </div>
    );
  }
}

export default Root;
