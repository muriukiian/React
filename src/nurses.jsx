function Nurses(props) {
  return(
    <div className="form">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Weight: {props.weight}</p>
    </div>
  );
}

export default Nurses