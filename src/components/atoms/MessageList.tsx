/* packages */
import React from "react";
import { Link } from "react-scroll";
/* store */
import { useChatDataSelector } from "../../store/slices/chatDataSlice";

export const MessageList: React.VFC = () => {
  const chatData = useChatDataSelector();
  return (
    <div>
      <Link to="concept" smooth duration={600} offset={-50}>
        {chatData.length === 0 ? (
          // ローディング処理を入れる
          <span>チャットはないです</span>
        ) : (
          chatData.map((item) => (
            <div key={item.key}>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </Link>
    </div>
  );
};
