import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogInPage = () => {
  const navigate = useNavigate();

  const notYetSupport = () => {
    alert(
      "Sorry, The Find ID/PW service is not yet supported.\nPlease contact admin."
    );
  };

  const logInSubmitLogic = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userId = formData.get("userId");
    const userPw = formData.get("userPw");

    if (!userId || !userPw) {
      if (!userId) {
        console.log("Enter a User ID");
        alert("Enter a User ID");
      } else if (!userPw) {
        console.log("Enter a User PW");
        alert("Enter a User PW");
      } else {
        console.log("Enter User ID and PW");
        alert("Enter User ID and PW");
      }
    } else {
      try {
        const res = await axios.post("API", {
          userId,
          userPw,
        });

        const { token } = res.data;
        localStorage.setItem("TripDiaryLoginToken", token);
        console.log("Success LogIn");

        // Add Logic After LogIn
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message || "Fail LogIn");
        } else {
          console.log("Fail to Connect Server");
          alert("Fail to Connect Server");
        }
        console.error(err);
      }
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
                notYetSupport();
              }}
            >
              Find ID/PW
            </label>
          </div>

          <button type="submit">Log In</button>
          <button
            type="button"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
