import React from "react";
import "./Counter.scss";

function FormattedDate(props) {
  return <h2>+ {props.date.toLocaleTimeString()}.</h2>;
}

class Counter extends React.Component {
  /*   constructor(props) {
    super(props);
    this.state = { date: new Date() };

  } */
  state = { date: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className="Counter">
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Counter;
