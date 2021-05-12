export default function Header() {
  return (
    <div>
      <h2>What to watch</h2>
      <input type="search" />
      <select id="type">
        <option value="Movies">Movies</option>
        <option value="Series">Series</option>
        <option value="Episode">Episode</option>
        <option value="Type" selected>
          Type
        </option>
      </select>
      <button className="search"> Search</button>
    </div>
  );
}
