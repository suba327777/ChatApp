import React, { ChangeEvent, useCallback, useState } from "react";
/* atoms */
import { SubmitButton } from "../atoms/SubmitButton";
import { TextInput } from "../atoms/TextInput";
/* firebase */
import { chatRef } from "../../lib/firebase";

import { ConvertChatList } from "../../lib/ConvertChatList";

export const ChatPage: React.VFC = () => {
  const [input, setInput] = useState("");

  const inputMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      //   e.preventDefault();
      setInput(e.target.value);
    },
    [setInput],
  );
  const onClick = async () => {
    await chatRef.push().set({
      text: input,
      //   createdAt: firebaseTimeStamp.now(),
    });
  };

  const chat = ConvertChatList();

  return (
    <div>
      ChatPage
      <div>
        {chat.map((item) => (
          <div key={item.key}>
            <p>{item.value.text}</p>
          </div>
        ))}
      </div>
      <TextInput label="メッセージを入力してね" value={input} onChange={inputMessage} />
      <SubmitButton onClick={onClick} />
    </div>
  );
};
