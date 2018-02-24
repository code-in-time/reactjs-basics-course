import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);

  }


  render() {
    return <button onClick={this.props.updateCounter}>UPDATE PARENT</button>;
  }
}

// Header.propTypes ={
//     name: React.PropTypes.string
// }
