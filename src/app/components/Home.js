import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = { age: props.initialAge };
  }

  btnClick(e) {
    this.setState({ age: this.state.age+3 });
  }

  render() {
    return (
      <div>
        Im a new componenet
        <span>{this.props.children}</span>
        <hr />
        <div>{this.state.age}</div>
        <button onClick={() => this.btnClick()}>click me</button>
        <button onClick={() => this.setState({ age: this.state.age+3 })}>click me</button>
      </div>
    );
  }
}

Home.propTypes = {
  age: React.PropTypes.number
};
