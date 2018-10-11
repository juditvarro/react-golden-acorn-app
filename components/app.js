import React from 'react';
import AcornButton from './button';
import AcornDisplay from './display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    this.setState(prevState => ({
      counter: prevState.counter > 0
        ? prevState.counter - 1
        : 0,
    }));
  }

  increase() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  // onKeyPress() {
  //   this.addEventListener('keypress', function(event) {
  //     if (event.key === 38) {
  //       this.setState({ counter: this.state.counter + 1 });
  //     } else if (event.key === 40) {
  //       this.setState({ counter: this.state.counter - 1 });
  //     }
  //   });
  // }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <AcornButton event={this.increase} text="Buy one" />
        <AcornDisplay display={counter} />
        <AcornButton event={this.decrease} text="Eat one" />
      </div>
    );
  }
}

export default App;
