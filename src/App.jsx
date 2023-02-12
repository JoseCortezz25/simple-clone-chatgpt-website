import { useState, useRef, useEffect } from "react";
import { Message } from "./components/Message/Message";
import { Input } from "./components/Input/Input";
import { getMessageByGPT } from "./services/message.js";
import "./App.css";

function App() {
  const chatRef = useRef(null);

  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      user: "gpt",
      message: "Hola, ¿en que te puedo ayudar hoy?",
    },
  ]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  });

  const addMessage = (message, user) => {
    setChatHistory([...chatHistory, { message, user }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput("");
    const response = await getMessageByGPT({ text: input });
    addMessage(`${response}`, "gpt");
  };

  return (
    <main className="Main">
      <h2 className="section__title">Simple Clone ChatGPT</h2>
      <section className="section Chat" ref={chatRef}>
        {chatHistory.map((message, idx) => (
          <Message
            key={`${message.message}${idx}`}
            text={message.message}
            user={message.user}
          />
        ))}
      </section>
      <Input
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
        addMessage={addMessage}
      />
    </main>
  );
}

export default App;
