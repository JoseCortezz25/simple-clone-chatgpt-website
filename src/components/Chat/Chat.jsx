import React from "react";
import { Loader } from "../Loader/Loader";
import { Message } from "../Message/Message";
import "./Chat.css";

const Chat = ({ children, logs, chatRef }) => {
  return (
    <section className="Chat">
      <div className="ChatLog" ref={chatRef}>
        {logs?.length > 0
          ? logs?.map((message, idx) => (
              <Message
                key={`${message.message}${idx}`}
                text={message.message}
                user={message.user}
              />
            ))
          : null}
      </div>
      {children}
    </section>
  );
};

export default Chat;
