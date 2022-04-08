/* packages */
import moment from "moment";
/* firebase */
import { chatRef } from "../firebase/firebase";

type Props = {
  userId: string;
  userName: string;
  imageUrl: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const addChat = async ({ userId, userName, imageUrl, text, setText }: Props) => {
  const createdAt = moment();
  const formatCreatedAt = createdAt.format("YYYY-MM-DD HH:mm:ss");

  // TODO文字列がない時はボタンを押せない様にする

  if (text.length === 0) return;
  await chatRef.push().set({
    userId,
    userName,
    imageUrl,
    text,
    createdAt: formatCreatedAt,
  });
  setText("");
};
