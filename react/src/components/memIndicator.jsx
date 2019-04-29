import React, { Component } from "react";

// Java VM Memory indicator
class MemIndicator extends Component {
  state = {
    maxMemory: 0,
    allocatedMemory: 0,
    freeMemory: 0,
    serverAccessError: false
  };

  digitsStyle = {
    width: 160,
    fontSize: 10,
    fontWaight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.digitsStyle} className={this.getBadgeClasses()}>
          <h6>VM Free Memory %</h6>
          <h1>{this.getBadgeValue()}</h1>
        </span>
      </div>
    );
  }

  componentDidMount() {
    const requestInterval = 5000;
    const url = `/usage/memory`;
    // const url = `http://localhost:8080/usage/memory`;

    const getTime = () => {
      //      fetch(url, { mode: "no-cors" })
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          this.setState({
            maxMemory: data.maxMemory,
            allocatedMemory: data.allocatedMemory,
            freeMemory: data.freeMemory,
            serverAccessError: false
          });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            maxMemory: 0,
            allocatedMemory: 0,
            freeMemory: 0,
            serverAccessError: true
          });
        });
    };

    setInterval(getTime, requestInterval);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.getFreeMemValue() < 20 ? "warning" : "primary";
    return classes;
  }

  getFreeMemValue() {
    let fm = this.state.freeMemory;
    let am = this.state.allocatedMemory;

    // console.log("free memory: " + fm);
    // console.log("alocated memory: " + am);
    // console.log("max memory: " + this.state.maxMemory);

    if (am === 0 || isNaN(am)) return "--";
    let result = (100 * fm) / am;
    if (result > 100) result = 100;
    if (result < 0 || isNaN(result)) result = 0;
    return Math.round(result);
  }

  getBadgeValue() {
    return this.state.serverAccessError ? "N/A" : this.getFreeMemValue();
  }
}

export default MemIndicator;
