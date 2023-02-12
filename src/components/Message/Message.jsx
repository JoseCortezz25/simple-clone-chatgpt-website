import React from "react";
import "./Message.css";
import gptIcon from "../../assets/icons/openai.svg";
import gptBlackIcon from "../../assets/icons/openai-black.svg";

const Message = ({ text, user }) => {
  return (
    <div
      className={
        user === "gpt" ? `Message message__gpt` : `Message message__user`
      }
    >
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
  );
};

export { Message };
