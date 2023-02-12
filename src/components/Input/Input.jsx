import React, { useState } from "react";
import "./Input.css";
import sendIcon from '../../assets/icons/send.svg'

const Input = ({ handleSubmit, input, setInput, addMessage }) => {

  return (
    <div className="Input">
      <form className="grid" onSubmit={handleSubmit}>
        <textarea 
          type="text" 
          placeholder="Ask anything..." 
          value={input}
          onChange={({target}) => setInput(target.value)}
          
        />
        <button type="submit" onClick={() => addMessage(`${input}`, 'me')}>
          <img src={sendIcon} alt="Icono de enviar" />
        </button>
      </form>
    </div>
  );
};

export { Input };
