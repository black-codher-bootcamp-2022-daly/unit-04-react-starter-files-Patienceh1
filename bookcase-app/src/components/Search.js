



const Search = (props) => {
  const { keyword, setKeyword, findBooks} = props;

  function handleChange(changeEvent) {
    console.log("Someone Typed event =>", changeEvent);
    setKeyword(changeEvent.target.value);
  }

  function onSubmit (event) {
    event.preventDefault()
    findBooks(keyword)
  }
  return (
    <form>
        <p style={{ color: "red" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input
        type="text"
        value={props.keyword}
        onChange={handleChange}
      />
      <input type="submit" onClick={onSubmit} />
    </form>
  );
};
export default Search;
