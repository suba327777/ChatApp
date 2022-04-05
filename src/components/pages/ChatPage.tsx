import React, { ChangeEvent, useCallback, useState } from "react";
/* atoms */
import { SubmitButton } from "../atoms/SubmitButton";
import { TextInput } from "../atoms/TextInput";
import { MessageList } from "../atoms/MessageList";
/* hooks */
import { useFetchData } from "../../hooks/useFetchData";
/* lib */
import { chatRef } from "../../lib/firebase";

export const ChatPage: React.VFC = () => {
  // 一回だけ実行
  useFetchData();

  const [text, setText] = useState("");
  //   clickした時とenter押した時に文字を削除する
  const inputMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      //   e.preventDefault();
      setText(e.target.value);
      //   enter押した時もonClickの処理に遷移する
    },
    [setText],
  );
  //   clickした時に状態が変わるのでredux
  const onClick = async () => {
    if (text === "") return;
    await chatRef.push().set({
      text,
      //   createdAt: firebaseTimeStamp.now(),
    });
    setText("");
  };
  return (
    <div>
      ChatPage
      <MessageList />
      <TextInput label="メッセージを入力してね" value={text} onChange={inputMessage} />
      <SubmitButton onClick={onClick} />
    </div>
  );
};
