const LogInPage = () => {
  const logInSubmitLogic = (e) => {
    //
  };
  return (
    <div>
      <div>
        <form onSubmit={logInSubmitLogic}>
          <label htmlFor="userId">User ID</label>
          <input id="userId" name="userId" type="text" />
          <label htmlFor="userPw">User PW</label>
          <input id="userPw" name="userPw" type="password" />

          <div>
            <label>Find ID/PW</label>
          </div>

          <button type="submit">Log In</button>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
