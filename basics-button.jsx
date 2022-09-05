// This file produces a button labeled as "+1", that increments a counter for a number displayed under it. This number displayed underneath starts out as "42"
// We have a parent component (app) and two children components (button, display)
// You can try running this at https://jscomplete.com/playground/rgs1.2

// 1. child component: button

function Button(props) {
  // const handleClick = () => setCounter(counter+1);
  // we want the onClick button to execute the incrementCounter function from the parent App component but a component can only access its own functions. So we pass a reference to incrementCounter to the Button component as a prop
  
	return (
    <button onClick = {props.onClickFunction}> 
      +1    
    </button>
    );
}

/* 2. child component: display
* just displays the value of a counter. will not have a state of its own
* a component can receive MANY attributes
* display component is displaying the "42"
* one way flow of data: parent component flowing data to children components
*/

function Display(props){
  return (
    <div> {props.message} </div>
  );
}

// 3. parent component: App
// we need to flow the counter value from the parent to the child (display component)
// to pass a prop to the component 

function App(){
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  
  return (
    <div>
      <Button onClickFunction = {incrementCounter}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  //<Button />,     each one of these elements gets translated into a function call
  // if you want to render several elements from the same component (such as button AND display), we can use an array:
  //[ <Button />, <Display />],
  // or we can make these two elements the children of another react element, as shown in function App()
  <App />,
  document.getElementById('mountNode'),
);
