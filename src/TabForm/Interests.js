function Interests({ interests, setData, errors }) {
  function onChangeHandler(e) {
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, e.target.name]
        : prevData.interests.filter((i) => i != e.target.name),
    }));
  }
  return (
    <div className="form">
      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests?.includes("coding")}
          onChange={onChangeHandler}
        />
        <label>coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="cricket"
          checked={interests?.includes("cricket")}
          onChange={onChangeHandler}
        />
        <label>cricket</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="movies"
          checked={interests?.includes("movies")}
          onChange={onChangeHandler}
        />
        <label>movies</label>
      </div>
      {errors.interests}
    </div>
  );
}
export default Interests;
