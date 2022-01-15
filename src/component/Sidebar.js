import React from "react";

export const Sidebar = () => {
  return (
    <div className="col-md-4">
      <div className="position-sticky" style={{ top: "2rem" }}>
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.
          </p>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            <li>
              <a href="www.google.com">March 2021</a>
            </li>
            <li>
              <a href="www.google.com">February 2021</a>
            </li>
            <li>
              <a href="www.google.com">January 2021</a>
            </li>
            <li>
              <a href="www.google.com">December 2020</a>
            </li>
            <li>
              <a href="www.google.com">November 2020</a>
            </li>
            <li>
              <a href="www.google.com">October 2020</a>
            </li>
            <li>
              <a href="www.google.com">September 2020</a>
            </li>
            <li>
              <a href="www.google.com">August 2020</a>
            </li>
            <li>
              <a href="www.google.com">July 2020</a>
            </li>
            <li>
              <a href="www.google.com">June 2020</a>
            </li>
            <li>
              <a href="www.google.com">May 2020</a>
            </li>
            <li>
              <a href="www.google.com">April 2020</a>
            </li>
          </ol>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            <li>
              <a href="www.google.com">GitHub</a>
            </li>
            <li>
              <a href="www.google.com">Twitter</a>
            </li>
            <li>
              <a href="www.google.com">Facebook</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
