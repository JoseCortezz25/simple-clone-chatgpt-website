import { useState, useRef, useEffect } from "react";
import { Input } from "./components/Input/Input";
import { getMessageByGPT } from "./services/message.js";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
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
    <main className="App">
      <Sidebar />
      <Chat chatRef={chatRef} logs={chatHistory} >
        <Input
          handleSubmit={handleSubmit}
          input={input}
          setInput={setInput}
          addMessage={addMessage}
        />
      </Chat>
    </main>
  );
}

export default App;
