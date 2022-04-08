/* packages */
import React from "react";
/* molucules */
import { InputArea } from "../molucules/InputArea";
import { UserMessageArea } from "../molucules/UserMessageArea";
/* hooks */
import { useFetchData } from "../../hooks/useFetchData";
import { useFetchImage } from "../../hooks/useFetchImage";

export const ChatPage: React.VFC = () => {
  // 一回だけ実行
  useFetchData();
  useFetchImage();
  return (
    <div>
      <InputArea />
      <UserMessageArea />
    </div>
  );
};
