import React from 'react';

interface Props{
    children: React.ReactNode;
    type: "question" | "answer";
}

const Message = ({children, type}:Props) => {
  return (
    <div className={`message ${type}`}>
      {children}
    </div>
  );
}

export default Message;