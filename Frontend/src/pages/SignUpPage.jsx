const SignUpPage = () => {
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

  return (
    <div>
      <div>
        <form>
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
