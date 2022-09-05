// This returns four buttons with the labels of 1, 5, 10, and 100. If you click on each of these you will add the labeled value. We start off with 0, if we click on 5 we have 5, if we click on 10, we have 15, etc.

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  
	return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}
// remember we need a function REFERENCE for the onClickEvent handler. So we can't use something like "props.onClickFunction" because that is an invocation of a function. We can, however, wrap this invocation in an inline function to make it into a reference
// inline is thehandleClick part, which could also have been inline within onClick as () => props.

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  // incrementValue is the argument that the function receives. It was empty before
  
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
