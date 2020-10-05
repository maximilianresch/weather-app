import React from "react";
import "./style.css";

class currentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
      this.timerID = setInterval(
          () => this.tick(),
          1000
      );
  }

  componentWillMount() {
      clearInterval(this.timerID);
  }

  tick() {
      this.setState({
          date: new Date()
      })
  }
  render() {
    return (
      <div className="date">
        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }
}

export default currentDate;
