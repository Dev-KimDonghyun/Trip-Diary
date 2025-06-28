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
    }
  ];

  const signUpSubmitLogic = async (e) => {
    e.preventDefault();

    const signUpFormData = new FormData(e.currentTarget);
    const nickName = signUpFormData.get("userNickName");
    const userId = signUpFormData.get("createUserId");

    if ((!userId || userId.value.trim() === "")||(!nickName || nickName.value.trim() === "")) {

      alert("Enter all firlds");

    } else { 
      try {
      await axios.post("http://localhost:5050/api/signup", {
        nickName,
        userId,
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
    } }
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
          <button type="submit">Create ID</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

// 400 빈칸 있음
// 409 동일 아이디 있음