import React, { useState } from "react";
import "./Input.css";

const Input = ({ handleSubmit, input, setInput, addMessage }) => {

  return (
    <div className="Input">
      <form className="grid" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ask anything..." 
          value={input}
          onChange={({target}) => setInput(target.value)}
        />
        <button type="submit" onClick={() => addMessage(`${input}`, 'me')}>Enviar</button>
      </form>
    </div>
  );
};

export { Input };
