/* packages */
import moment from "moment";
/* firebase */
import { chatRef } from "../firebase/firebase";

type Props = {
  userId: string;
  userName: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const addChat = async ({ userId, userName, text, setText }: Props) => {
  const createdAt = moment();
  const formatCreatedAt = createdAt.format("MM月DD日HH時mm分 (ddd)");
  // TODO文字列がない時はボタンを押せない様にする

  if (text.length === 0) return;
  await chatRef.push().set({
    userId,
    userName,
    text,
    createdAt: formatCreatedAt,
  });
  setText("");
};
