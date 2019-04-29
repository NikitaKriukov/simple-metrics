import React, { Component } from "react";

// System CPU load indicator
class CpuIndicator extends Component {
  state = {
    cpuLoadValue: 0,
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
          <h6>System CPU load %</h6>
          <h1>{this.getBadgeValue()}</h1>
        </span>
      </div>
    );
  }

  componentDidMount() {
    const requestInterval = 1000;
    const url = `/usage/cpu`;
    //    const url = `http://localhost:8080/usage/cpu`;
    const getTime = () => {
      //      fetch(url, { mode: "no-cors" })
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          this.setState({
            cpuLoadValue: data.systemCpuLoad,
            serverAccessError: false
          });
        })
        .catch(err => {
          console.error(err);
          this.setState({
            cpuLoadValue: 0,
            serverAccessError: true
          });
        });
    };

    setInterval(getTime, requestInterval);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.cpuLoadValue > 70 ? "warning" : "primary";
    return classes;
  }

  getBadgeValue() {
    return this.state.serverAccessError ? "N/A" : this.state.cpuLoadValue;
  }
}

export default CpuIndicator;
