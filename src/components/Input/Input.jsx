import React, { useRef, useState } from "react";
import sendIcon from "../../assets/icons/send.svg";
import "./Input.css";

const Input = ({ handleSubmit, input, setInput, addMessage }) => {
  const textarea = useRef(null);
  const [height, setHeight] = useState("50px");

  const handleKey = (e) => {
    if (e.target.value.length < 150) {
      return setHeight("50px");
    }
    const currentHeight = e.target.scrollHeight;
    setHeight(`${currentHeight}px`);
  };

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <textarea
        ref={textarea}
        type="text"
        value={input}
        style={{ height: height }}
        onKeyUp={handleKey}
        onChange={({ target }) => setInput(target.value)}
      />
      <button type="submit" onClick={() => addMessage(`${input}`, "me")}>
        <img src={sendIcon} alt="Icono de enviar" />
      </button>
    </form>
  );
};

export { Input };
