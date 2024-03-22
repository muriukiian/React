function Form(){
  return(
    <form className="form">
      <label>Sign in.</label><br></br>
      <label for="name">Username</label><br></br>
      <input class="input" type="name" id="name" name="name" placeholder="Enter Username" /><br/>
      <label for="password">Password</label><br></br>
      <input class="input" type="password" id="passweord" name="password" placeholder="Enter password" required /><br></br>
      <button type="submit" className="button">Sign in</button>
    </form>
  );
}

export default Form