import React, { Component } from "react";
import CpuIndicator from "./cpuIndicator";
import MemoryIndicator from "./memIndicator";

class IndicatorsContainer extends Component {
  render() {
    return (
      <div>
        <CpuIndicator />
        <MemoryIndicator />
      </div>
    );
  }
}

export default IndicatorsContainer;
