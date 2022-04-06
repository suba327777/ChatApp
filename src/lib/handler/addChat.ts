/* packages */
import moment from "moment";
/* firebase */
import { chatRef } from "../firebase";

type Props = {
  userName: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const addChat = async ({ userName, text, setText }: Props) => {
  const createdAt = moment();
  const formatCreatedAt = createdAt.format("MM月DD日HH時mm分 (ddd)");
  // TODO文字列がない時はボタンを押せない様にする

  if (text.length === 0) return;
  await chatRef.push().set({
    userName,
    text,
    createdAt: formatCreatedAt,
  });
  setText("");
};
