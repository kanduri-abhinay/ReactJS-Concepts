function Profile({ name, age, email, setData, errors }) {
  function onChangeHandler(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="form">
      <div>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChangeHandler}
        />
        {errors.name}
      </div>
      <div>
        <label>age</label>
        <input
          type="number"
          name="age"
          value={age}
          onChange={onChangeHandler}
        />
        {errors.age}
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        {errors.email}
      </div>
    </div>
  );
}
export default Profile;
