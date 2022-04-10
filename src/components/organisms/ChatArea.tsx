/* packages */
import React from "react";
/* components */
import { InputArea } from "../molucules/InputArea";
import { UserMessageArea } from "../molucules/UserMessageArea";

export const ChatArea: React.VFC = () => (
  <>
    <InputArea />
    <UserMessageArea />
  </>
);
