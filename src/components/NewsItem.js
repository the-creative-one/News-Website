import React from "react";

// In class based we use this.props but in function based we don't have to use this. ,only we need to write props.

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="container-fluid mt-3">
        <div className="card">
          <div
            className="d-flex position-absolute top-0 start-100 translate-middle"
            style={{ justifyContent: "flex-end", right: "0" }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.pond5.com/news-headline-newspaper-front-press-footage-125041947_iconm.jpeg"
                : imageUrl
            }
            className="card-img-top "
            alt="..."
            style={{ height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}....</p>
            <p className="card-text">
              <small className="text-body-secondary">
                <i>
                  By {!author ? "Unknown" : author} on{" "}
                  {new Date(date).toUTCString()}
                </i>
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-success px-2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
