import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogInPage = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");

  const notYetSupport = () => {
    alert(
      "Sorry, The Find ID/PW service is not yet supported.\nPlease contact admin."
    );
  };

  const logInSubmitLogic = async (e) => {
    e.preventDefault();

    if (!userId || userId.value.trim() === "") {
      console.log("Enter a User ID");
      alert("Enter a User ID");
    } else {
      try {
        await axios
          .post("http://localhost:5050/api/login", {
            userId,
          })
          .then((res) => {
            const dataBaseIdentifyId = res.data.user._id;
            const userNickname = res.data.user.nickname;

            localStorage.setItem("tripDiaryUserNickname", userNickname);
            localStorage.setItem("tripDiaryDataBaseId", dataBaseIdentifyId);

            alert("Login Successed");
          });

        navigate("/");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          const status = err.response.status;

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
          <label>User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

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
