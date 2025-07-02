import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");

  const SignUpPageFormList = [
    {
      id: "userNickName",
      type: "text",
      title: "Nickname",
      description: "Please enter your Nickname",
      value: nickName,
      change: (e) => setNickName(e.target.value),
    },
    {
      id: "createUserId",
      type: "text",
      title: "ID",
      description: "Please enter your ID",
      value: userId,
      change: (e) => setUserId(e.target.value),
    },
  ];

  const signUpSubmitLogic = async (e) => {
    e.preventDefault();

    if (
      !userId ||
      userId.value.trim() === "" ||
      !nickName ||
      nickName.value.trim() === ""
    ) {
      alert("Enter all firlds");
    } else {
      try {
        await axios
          .post("http://localhost:5050/api/createId", {
            nickName,
            userId,
          })
          .then((res) => {
            const dataBaseIdentifyId = res.data.user._id;
          });

        alert("Succeeded for Create ID");

        navigate("/");
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          const status = err.response.status;

          if (status === 400) {
            alert("Enter all firlds");
          } else if (status === 409) {
            alert("User ID already exists");
          } else {
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
        <form onSubmit={signUpSubmitLogic}>
          {SignUpPageFormList.map((list) => (
            <div key={list.id}>
              <label>{list.title}</label>
              <input
                type={list.type}
                value={list.value}
                placeholder={list.description}
                onChange={list.change}
              />
            </div>
          ))}
          <button type="submit">Create ID</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

// 400 빈칸 있음
// 409 동일 아이디 있음
