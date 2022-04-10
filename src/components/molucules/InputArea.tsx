/* packages */
import React, { ChangeEvent, useCallback, useState } from "react";
import styled from "styled-components";
/* components */
import { SendButton, TextInput } from "../atoms/index";
/* hooks */
import { useAppDispatch } from "../../hooks/useAppDispatch";
/* lib */
import { addChat } from "../../lib/handler/addChat";
import { generateRandomChar } from "../../lib/function/generateRandomChar";
import { setUserIdData } from "../../store/slices/user/userIdDataSlice";
import { setUserNameData } from "../../store/slices/user/userNameDataSlice";
import { useImageUrlDataSelector } from "../../store/slices/imageUrlDataSlice";

export const InputArea: React.VFC = () => {
  const dispatch = useAppDispatch();

  const imageUrl = useImageUrlDataSelector();

  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  dispatch(setUserIdData(userId));

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
      setUserId(generateRandomChar());
      dispatch(setUserNameData(userName));
    }
  };

  return (
    <div>
      {isLogin ? (
        <SInputContainer>
          <SName>{userName}</SName>
          <TextInput placeholder="メッセージを入力してね" value={text} onChange={inputMessage} />
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
          <TextInput
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
