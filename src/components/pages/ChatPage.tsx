import React, { ChangeEvent, useCallback, useState } from "react";
/* atoms */
import { SubmitButton } from "../atoms/SubmitButton";
import { TextInput } from "../atoms/TextInput";
import { MessageList } from "../atoms/MessageList";
/* hooks */
import { useFetchData } from "../../hooks/useFetchData";
import { useAppDispatch } from "../../hooks/useAppDispatch";
/* lib */
import { addChat } from "../../lib/handler/addChat";
/* store */
import { setUserNameData } from "../../store/slices/userNameDataSlice";

export const ChatPage: React.VFC = () => {
  // 一回だけ実行
  useFetchData();

  const dispatch = useAppDispatch();

  const [text, setText] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
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

  const login = () => {
    if (userName.length === 0) {
      // TODO 名前を入力してねと表示させる
    } else {
      setIsLogin(true);
      dispatch(setUserNameData(userName));
    }
  };
  return (
    <div>
      ChatPage
      {isLogin ? (
        <div>
          <p>{userName}</p>
          <TextInput placeholder="メッセージを入力してね" value={text} onChange={inputMessage} />
          <SubmitButton
            onClick={() =>
              addChat({
                text,
                setText,
                userName,
              })
            }
          />
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
