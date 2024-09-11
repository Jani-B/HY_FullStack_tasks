function Button(props) {
  return (
    <>
      <button onClick={props.clickEvent}>{props.text}</button>
    </>
  );
}

export default Button;
