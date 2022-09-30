// THIS SHOWS:
// UI 1 - Please sign up + login button
// UI 2 - Welcome back + logout button

class LoginControl extends React.Component {
  
  // 1. constructor method
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);         // binding the method "handleLoginClick"
    this.handleLogoutClick = this.handleLogoutClick.bind(this);       // binding the method "handleLogoutClick"
    this.state = {isLoggedIn: false};                                 // setting the initial state of the UI
  }

  // 2. method: handleLoginClick
  handleLoginClick() {
    this.setState({isLoggedIn: true});            // isLoggedIn is the props?
  }
  
  // 3. method: handleLogoutClick
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  // 4. render method
  render() {
    const isLoggedIn = this.state.isLoggedIn;      // defining const isLoggedIn within render method
    let button;

    // conditional rendering
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;    // onClick is the event. handleLogoutClick is the event handler method
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    // return method within render
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }  // closing render
} // closing the class Login Control

// 5. functions that return some UX/UI (two headers and two buttons)
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;           // passing on the constant isLoggedIn to props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);
