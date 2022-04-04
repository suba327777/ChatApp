/* packages */
import { useEffect, useState } from "react";
/* firebase */
import { chatRef } from "../lib/firebase";

export const useFetchData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    chatRef.on("value", (snapshot) => {
      if (snapshot?.val()) {
        setData(snapshot.val());
      }
    });
    return () => {
      chatRef.off();
    };
  }, [chatRef]);

  return data;
};
