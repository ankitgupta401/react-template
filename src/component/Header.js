import React from "react";

const Header = () => {
  return (
    <div className="container">
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary" href="www.google.com">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="www.google.com">
              Large
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a
              className="link-secondary"
              href="www.google.com"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <a
              className="btn btn-sm btn-outline-secondary"
              href="www.google.com"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <a className="p-2 link-secondary" href="www.google.com">
            World
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            U.S.
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Technology
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Design
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Culture
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Business
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Politics
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Opinion
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Science
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Health
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Style
          </a>
          <a className="p-2 link-secondary" href="www.google.com">
            Travel
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
