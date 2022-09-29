// This produces a button that says ON, and if you click it, it says OFF, and back to ON if you click it again

class Toggle extends React.Component {
  
  // 1. constructor method
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};            // setting the initial state 

    this.handleClick = this.handleClick.bind(this);           // This BINDING is necessary to make `this` work in the callback. Remember than in JSX, methods are not bound by default
  }

  // 2. method to handle the event                oh man an arrow function, not a fan atm
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  
 // 3. classic render method - UI
  render() {
    return (
      <button onClick={this.handleClick}>           // event: onClick         method: handleClick. Generally, if you refer to a method without "()" after it, you need to have binded it first before
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
  
}
