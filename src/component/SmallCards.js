import React, { useState } from "react";

export const SmallCards = (props) => {
  const [count, setCount] = useState({});

  const incrementCount = (e, i) => {
    e.preventDefault();
    let newCount = (count[i] || 0) + 1;

    setCount({
      ...count,
      [i]: newCount,
    });
  };
  return (
    <div className="row mb-2">
      {props.data.map((val, i) => {
        return (
          <div key={i} className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className={"d-inline-block mb-2 " + val.colourClass}>
                  {" "}
                  {val.category}
                </strong>
                <h3 className="mb-0">{val.title}</h3>
                <div className="mb-1 text-muted">{val.date}</div>
                <p className="card-text mb-auto">{val.description}</p>
                <a
                  onClick={(e) => incrementCount(e, i)}
                  href="www.google.com"
                  className="stretched-link"
                >
                  Continue reading
                </a>
                <p>Count: {count[i] || 0}</p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
