/* packages */
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
/* components */
import { SendButton, TextInput, UserNameInput } from "../atoms/index";
/* hooks */
import { useAppDispatch } from "../../hooks/useAppDispatch";
/* lib */
import { addChat } from "../../lib/handler/addChat";
import { generateRandomChar } from "../../lib/function/generateRandomChar";
/* store */
import { setUserIdData, setUserNameData, useImageUrlDataSelector } from "../../store/slices/index";

export const InputArea: React.VFC = () => {
  const dispatch = useAppDispatch();

  const imageUrl = useImageUrlDataSelector();

  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setUserId(generateRandomChar());
  }, []);

  const inputMessage = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText],
  );
  const inputUserName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    [setUserName],
  );
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Enter" || typing) return;

    addChat({
      text,
      setText,
      userName,
      userId,
      imageUrl,
    });
  };
  const login = () => {
    if (userName.length !== 0) {
      setIsLogin(true);
      dispatch(setUserIdData(userId));
      dispatch(setUserNameData(userName));
    }
  };

  return (
    <div>
      {isLogin ? (
        <SInputContainer>
          <SName>{userName}</SName>
          <TextInput
            placeholder="メッセージを入力してね"
            value={text}
            onChange={inputMessage}
            onKeyDown={onKeyDown}
            onCompositionStart={() => setTyping(true)}
            onCompositionEnd={() => setTyping(false)}
          />
          <SendButton
            onClick={() =>
              addChat({
                text,
                setText,
                userName,
                userId,
                imageUrl,
              })
            }
          />
        </SInputContainer>
      ) : (
        <SInputContainer>
          <UserNameInput
            placeholder="ユーザー名を入力してね"
            value={userName}
            onChange={inputUserName}
          />
          <SendButton onClick={login} />
        </SInputContainer>
      )}
    </div>
  );
};

const SInputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: white;
`;

const SName = styled.p`
  font-size: 15px;
  padding-top: 13px;
`;
