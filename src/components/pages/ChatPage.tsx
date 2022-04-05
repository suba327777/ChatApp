import React, { ChangeEvent, useCallback, useState } from "react";
/* atoms */
import { SubmitButton } from "../atoms/SubmitButton";
import { TextInput } from "../atoms/TextInput";
import { MessageList } from "../atoms/MessageList";
/* hooks */
import { useFetchData } from "../../hooks/useFetchData";
import { useAppDispatch } from "../../hooks/useAppDispatch";
/* lib */
import { chatRef } from "../../lib/firebase";
/* store */
import { setUserNameData } from "../../store/slices/userNameDataSlice";

export const ChatPage: React.VFC = () => {
  // 一回だけ実行
  useFetchData();
  const dispatch = useAppDispatch();

  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const [islogin, setIsLogin] = useState(false);
  //   clickした時とenter押した時に文字を削除する
  const inputMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      //   e.preventDefault();
      setText(e.target.value);
      //   enter押した時もonClickの処理に遷移する
    },
    [setText],
  );

  const inputUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    [setUserName],
  );
  //   clickした時に状態が変わるのでredux
  const onClick = async () => {
    if (text === "") return;
    await chatRef.push().set({
      userName,
      text,
      //   createdAt: firebaseTimeStamp.now(),
    });
    setText("");
  };

  const login = () => {
    if (userName === "") {
      window.alert("ユーザー名を入力して！！！！");
    } else {
      setIsLogin(true);
      dispatch(setUserNameData(userName));
    }
  };
  return (
    <div>
      ChatPage
      {islogin ? (
        <div>
          <p>{userName}</p>
          <TextInput placeholder="メッセージを入力してね" value={text} onChange={inputMessage} />
          <SubmitButton onClick={onClick} />
        </div>
      ) : (
        <div>
          <TextInput
            placeholder="ユーザー名を入力してね"
            value={userName}
            onChange={inputUserName}
          />
          <SubmitButton onClick={login} />
        </div>
      )}
      <MessageList />
    </div>
  );
};
