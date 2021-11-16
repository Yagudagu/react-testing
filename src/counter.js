import React from "react";

//const ErrorComponent = () => <div>{props.ignore}</div>;

export default class Counter extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  // This allows us to pass in props and add them to the state
  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  // Gets called after the component mounts
  componentDidMount() {
    console.log("ComponentDidMount");
    console.log("-----------------------------");
  }

  // Used to stop the component from updating
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.state.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update - DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update - RENDER");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("GetSnapshotBeforeUpdate");
    return null;
  }

  render() {
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <div className="counter">Counter: {this.state.counter}</div>
        {/* <ErrorComponent /> */}
      </div>
    );
  }

  // This is called when the component is updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("-----------------------------");
  }

  // Called after the component unmounts
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
    console.log("-----------------------------");
  }

  componentDidCatch(error, info) {
    console.log("ComponentDidCatch");
    console.log("-----------------------------");
  }
}
