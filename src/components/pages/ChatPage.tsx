/* packages */
import React from "react";
import moment from "moment";
/* components */
import { Header } from "../template/Header";
import { ChatArea } from "../organisms/ChatArea";
/* hooks */
import { useFetchData } from "../../hooks/useFetchData";
import { useFetchImage } from "../../hooks/useFetchImage";

export const ChatPage: React.VFC = () => {
  moment.locale("ja");
  // 一回だけ実行
  useFetchData();
  useFetchImage();
  return (
    <>
      <Header />
      <ChatArea />
    </>
  );
};
