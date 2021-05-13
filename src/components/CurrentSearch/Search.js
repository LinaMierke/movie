import "../CurrentSearch/Search.css";

export default function Search(props) {
  console.log("hello props", props.information.data);
  return (
    <div>
      <h1 style={{ backgroundColor: "#0061F3" }}> Current Search</h1>
      <div className="card">
        <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          {/* <h4>
            <b>{props.information.data.Title}</b>
          </h4>
          <p>{props.information.data}</p>
          <p>Realease Date: {props.information.data}</p>
          <p> Raiting:{props.information.data}</p> */}
        </div>
      </div>
    </div>
  );
}
