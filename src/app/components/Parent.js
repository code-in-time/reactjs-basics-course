import React from "react";
import { Child } from './Child';

export class Parent extends React.Component {

  constructor(props) {
    super();
    // Set the state
    this.state = {
      counter: 0
    }
    this.updateCounter = this.updateCounter.bind(this);
  }
/**
 * This wuill update the stateof counter
 * 
 * @memberof Parent
 */
updateCounter() {
    this.setState({
      counter: this.state.counter+=1
    })
    console.log('ttttt');
  }

  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img data-src="#" alt="" />
          <div className="caption">
            <h3>Counter {this.state.counter}</h3>
            <Child updateCounter={this.updateCounter} testProp={1}></Child>
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes ={
//     name: React.PropTypes.string
// }
