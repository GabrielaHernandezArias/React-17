/* Preventing Component from Rendering
*  In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.
*  In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:
* Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance componentDidUpdate will still be called.
*
*  This code displays a button that initially says "Hide". There's a banner above that says WARNING. If you click the button it will hide the banner, and the button will now display "Show"
*/

// 1. component: function
function WarningBanner(props) {
  if (!props.warn) {    // if false
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

// 2. component: class 
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}     // class component ends

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);
