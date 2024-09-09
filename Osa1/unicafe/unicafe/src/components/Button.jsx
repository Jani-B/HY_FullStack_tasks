function Button(props) {
  return (
    <>
      <button onClick={props.giveFeedback}>{props.feedback}</button>
    </>
  );
}

export default Button;

//onClick={props.handleClick}
