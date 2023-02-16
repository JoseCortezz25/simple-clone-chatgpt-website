import React from "react";
import githubIcon from "../../assets/icons/github.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <nav>
        <span>Clone ChatGPT</span>
      </nav>
      <nav>
        <div className="Icon">
          <a
            href="https://github.com/josecortezz25"
            target="__blank"
            rel="noopener"
          >
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </nav>
    </aside>
  );
};

export { Sidebar };
