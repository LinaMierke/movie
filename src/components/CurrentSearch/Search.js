import "../CurrentSearch/Search.css"

export default function Search() {
  return (
    <div>
      <h1 style={{ backgroundColor: "#0061F3" }}> Current Search</h1>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>Movie Name</b>
          </h4>
          <p>ArchitectEngineer</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}