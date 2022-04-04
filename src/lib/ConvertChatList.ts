import { useFetchData } from "../hooks/useFetchData";
import { bufChatData } from "../types/bufChatData";
import { dbData } from "../types/dbData";

export const ConvertChatList = () => {
  const chatData = useFetchData();

  //   jsonを配列に変換する
  const chatDataList: bufChatData[] = Object.entries<dbData>(chatData || {}).map(
    ([key, value]) => ({
      key,
      value,
    }),
  );

  return chatDataList;
};
