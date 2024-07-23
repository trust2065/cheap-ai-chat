'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="">
      <main className="flex flex-col w-full mx-2">
        {messages.map((message) => (
          <div key={message.id} className="whitespace-pre-wrap">
            {message.role === 'user' ? 'User:' : 'AI:'}
            {message.content}
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border-gray-300 rounded shadow-xl text-black"
            placeholder="Say something"
          />
        </form>
      </main>
    </div>
  );
}
