import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const SignUpPageFormList = [
    {
      id: "userNickName",
      type: "text",
      title: "Nickname",
      description: "Please enter your Nickname",
    },
    {
      id: "createUserId",
      type: "text",
      title: "ID",
      description: "Please enter your ID",
    },
    {
      id: "createUserPw",
      type: "password",
      title: "Password",
      description: "Please enter your password of at least 8 characters",
    },
  ];

  const signUpSubmitLogic = async (e) => {
    e.preventDefault();
    const signUpFormData = new FormData(e.currentTarget);
    const nickName = signUpFormData.get("userNickName");
    const userId = signUpFormData.get("createUserId");
    const userPw = signUpFormData.get("createUserPw");

    try {
      await axios.post("http://localhost:5050/api/signup", {
        nickName,
        userId,
        userPw,
      });

      const suc = "Succeeded for Sign Up";
      console.log(suc);
      alert(suc);
      navigate("/");
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
        alert("Fail to Sign Up");
      } else {
        console.log("Fail to Connect Server");
        alert("Fail to Connect Server");
      }
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={signUpSubmitLogic}>
          {SignUpPageFormList.map((list) => (
            <div key={list.id}>
              <label htmlFor={list.id}>{list.title}</label>
              <input
                id={list.id}
                name={list.id}
                type={list.type}
                placeholder={list.description}
              />
            </div>
          ))}
          <button type="submit">Sign </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
