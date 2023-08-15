import { Component } from "react";
import LifeCycleExample from "./components/LifeCycleExample";
import UseMemoExample1 from "./components/UseMemoExample1";
import UseMemoExample2 from "./components/UseMemoExample2";
import Average from "./components/Average";
import UseCallbackExample from "./components/UseCallbackExample";
import Box from "./components/Box";
import BoxSize from "./components/BoxSize";
import AverageCallback from "./components/AverageCallback";

class App extends Component {
  state = { color: "red" };

  handleClick = () => {
    this.setState({
      color: this.state.color === "red" ? "blue" : "red",
    });
  };
  render() {
    return (
      // <div>
      //   <button onClick={this.handleClick} style={{ color: this.state.color }}>
      //     {this.state.color}
      //   </button>
      //   <LifeCycleExample color={this.state.color} />
      // </div>
      // <div>
      //   <UseMemoExample1 />
      // </div>
      // <div>
      //   <UseMemoExample2 />
      // </div>
      // <div>
      //   <Average />
      // </div>
      // <div>
      //   <UseCallbackExample />
      // </div>
      // <div>
      //   <BoxSize />
      // </div>
      <div>
        <AverageCallback />
      </div>
    );
  }
}

export default App;
