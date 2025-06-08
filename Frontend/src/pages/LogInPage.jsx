const LogInPage = () => {
  const logInSubmitLogic = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId");
    const userPW = formData.get("userPw");

    if (!userId || !userPW) {
      if (!userId) {
        console.log("Enter a User ID");
        alert("Enter a User ID");
      } else if (!userPW) {
        console.log("Enter a User PW");
        alert("Enter a User PW");
      } else {
        console.log("Enter User ID and PW");
        alert("Enter User ID and PW");
      }
    } else {
      // LogIn JavaScript Logic
    }
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
            <label
              onClick={() => {
                // Route To Find ID/PW Page
              }}
            >
              Find ID/PW
            </label>
          </div>

          <button type="submit">Log In</button>
          <button
            onClick={() => [
              // Route To Sign Up Page
            ]}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
