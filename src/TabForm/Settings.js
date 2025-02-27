function Settings({ theme, setData }) {
  function onChangeHandler(e) {
    setData((prevData) => ({
      ...prevData,
      theme: e.target.value,
    }));
  }
  return (
    <div className="form">
      <div>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={onChangeHandler}
        />
        <label>dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={onChangeHandler}
        />
        <label>light</label>
      </div>
    </div>
  );
}
export default Settings;
