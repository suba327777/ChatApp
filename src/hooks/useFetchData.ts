/* packages */
import { useEffect } from "react";
/* hooks */
import { useAppDispatch } from "./useAppDispatch";
/* lib */
import { chatRef } from "../lib/firebase/firebase";
import { convertChatList } from "../lib/function/convertChatList";
/* store */
import { setChatData, setIsChatCompleted } from "../store/slices/index";

export const useFetchData = () => {
  try {
    const dispatch = useAppDispatch();
    useEffect(() => {
      chatRef.on("value", async (snapshot) => {
        if (snapshot?.val()) {
          const chatData = await snapshot.val();
          const convertChatData = convertChatList(chatData);
          dispatch(setChatData(convertChatData));

          dispatch(setIsChatCompleted(true));
        } else {
          dispatch(setIsChatCompleted(true));
        }
      });
      return () => {
        chatRef.off();
      };
    }, []);
  } catch (err: unknown) {
    console.log(err);
  }
};
