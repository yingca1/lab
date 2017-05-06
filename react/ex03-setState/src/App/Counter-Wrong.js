import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  reset = () => {
   this.setState({ count : 0 });
  }

  increaseCounterBy1 = () => {
   this.setState({ count : this.state.count + 1 });
  }

  increaseCounterBy3 = () => {
   this.setState({ count : this.state.count + 1 });
   this.setState({ count : this.state.count + 1 });
   this.setState({ count : this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <label>Counter: </label>
        {this.state.count}
        <br/>
        <br/>
        <input
          type="button"
          value="Increase by 1"
          onClick={this.increaseCounterBy1}
        />
        &nbsp;&nbsp;&nbsp;
        <input
          type="button"
          value="Increase by 3"
          onClick={this.increaseCounterBy3}
        />
        <br/>
        <br/>
        <input
          type="button"
          value="Reset"
          onClick={this.reset}
        />
      </div>
    )
  }
}

export default Counter;
