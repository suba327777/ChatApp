/* packages */
import { useEffect } from "react";
/* hooks */
import { useAppDispatch } from "./useAppDispatch";
/* lib */
import { chatRef } from "../lib/firebase";
import { convertChatList } from "../lib/convertChatList";
/* store */
import { setChatData } from "../store/slices/chatDataSlice";

export const useFetchData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    chatRef.on("value", async (snapshot) => {
      if (snapshot?.val()) {
        const chatData = await snapshot.val();
        const convertChatData = convertChatList(chatData);
        dispatch(setChatData(convertChatData));
      }
    });
    return () => {
      chatRef.off();
    };
  }, []);
};
