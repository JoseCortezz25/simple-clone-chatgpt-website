import React from "react";
import gptIcon from "../../assets/icons/openai.svg";
import gptBlackIcon from "../../assets/icons/openai-black.svg";
import "./Message.css";

const Message = ({ text, user }) => {
  return (
    <article
      className={
        user === "gpt" ? `Message backgroun-light-gray` : `Message`
      }
    >
      <div className="Message__content">
        
        {user === "gpt" ? (
          <div className="Icon__logo Icon__gpt">
            <img src={gptIcon} alt="" />
          </div>
        ) : (
          <div className="Icon__logo Icon__user">
            <img src={gptBlackIcon} alt="" />
          </div>
        )}
        <p>{text}</p>
      </div>
    </article>
  );
};

export { Message };
