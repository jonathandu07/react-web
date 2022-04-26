const Card = ({ source, author, joke }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img src={source} className="img-fluid mb-3 m-md-0" alt={author} />
        <div className="card-body">
          <h5 className="card-title">{author}</h5>
          <p className="card-text">{joke}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
