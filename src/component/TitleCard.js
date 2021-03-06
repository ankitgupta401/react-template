import React from "react";

export const TitleCard = (props) => {
  return (
    <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">{props.title}</h1>
        <p className="lead my-3">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what’s most interesting in this post’s
          contents.
        </p>
        <p className="lead mb-0">
          <a href="www.google.com" className="text-white fw-bold">
            Continue reading...
          </a>
        </p>
      </div>
    </div>
  );
};
