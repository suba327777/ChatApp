/* packages */
import React from "react";
import { Link } from "react-scroll";
/* store */
import { useChatDataSelector } from "../../store/slices/chatDataSlice";
import { useUserNameDataSelector } from "../../store/slices/userNameDataSlice";

export const MessageList: React.VFC = () => {
  const chatData = useChatDataSelector();
  const userNameData = useUserNameDataSelector();
  return (
    <div>
      <Link to="concept" smooth duration={600} offset={-50}>
        {chatData.length === 0 ? (
          // ローディング処理を入れる
          <span>ローディング中です</span>
        ) : (
          chatData.map((item) => (
            <div key={item.key}>
              <p>
                {/* 名前を入力したらreduxで名前を格納してその名前を元に */}
                {/* 送られたメッセージが自分ではない場合は右に送信する */}
                {item.userName === userNameData ? (
                  <div>
                    {`${item.userName}`} {item.text}
                  </div>
                ) : (
                  <div>
                    {`${item.userName}違う人`} {item.text}
                  </div>
                )}
              </p>
            </div>
          ))
        )}
      </Link>
    </div>
  );
};
