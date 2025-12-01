import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-top py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span className="text-muted">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </span>

        <ul className="list-unstyled d-flex mb-0 mt-0 mt-md-0">
          <li className="ms-1">
            <a className="text-muted" href="/privacy">
              Privacy
            </a>
          </li>
          <li className="ms-1">
            <a className="text-muted" href="/terms">
              Terms
            </a>
          </li>
          <li className="ms-1">
            <a className="text-muted" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
