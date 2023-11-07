function Card({ name, image, action, titles }) {
  return (
    <div className="card">
      <div className="img-box">
        {" "}
        <img src={image} />
      </div>

      <h1 className="card-title"> {name} </h1>
      <div> {titles} </div>

      <button className="btn" onClick={() => action(titles)}>
        SHOW
      </button>
    </div>
  );
}

export default Card;
