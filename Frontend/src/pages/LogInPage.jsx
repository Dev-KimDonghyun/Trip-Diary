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

    if (!userId || userId.value.trim() === "") {
      console.log("Enter a User ID");
      alert("Enter a User ID");
    } else {
      try {
        await axios
          .post("API", {
            userId,
          })
          .then((res) => {
            const dataBaseIdentifyId = res.data.user._id;
            const userNickname = res.data.user.nickname;
          });

        // Add Logic After LogIn
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          const status = err.response.status;
          const message = err.response.data.message;

          if (status === 404) {
            alert("This is a non existent user");
          } else {
            console.log("Fail to Connect Server");
            alert("Fail to Connect Server");
          }
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
          <div>
            <label
              onClick={() => {
                notYetSupport();
              }}
            >
              Find ID
            </label>
          </div>

          <button type="submit">Log In</button>
          <button
            type="button"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Create ID
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
