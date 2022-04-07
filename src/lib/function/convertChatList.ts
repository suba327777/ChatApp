/* types */
import { chatData } from "../../types/chatData";
import { dbData } from "../../types/dbData";

export const convertChatList = (data: any) => {
  //   jsonを配列に変換する
  const chatDataList: chatData[] = Object.entries<dbData>(data || {}).map(([key, value]) => ({
    key,
    userId: value.userId,
    userName: value.userName,
    text: value.text,
    createdAt: value.createdAt,
  }));

  const reverseChatDataList: chatData[] = [...chatDataList].reverse();

  return reverseChatDataList;
};
