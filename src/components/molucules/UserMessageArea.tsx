/* packages */
import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
/* components */
import { Icon } from "../atoms/Icon";
/* store */
import { useChatDataSelector } from "../../store/slices/chatDataSlice";
import { useUserNameDataSelector } from "../../store/slices/user/userNameDataSlice";
import { useUserIdDataSelector } from "../../store/slices/user/userIdDataSlice";
import { useImageUrlDataSelector } from "../../store/slices/imageUrlDataSlice";

export const UserMessageArea: React.VFC = () => {
  const chatData = useChatDataSelector();
  const userNameData = useUserNameDataSelector();
  const userIdData = useUserIdDataSelector();
  const imageUrl = useImageUrlDataSelector();

  return (
    <SBody>
      {/* <Link to="concept" smooth duration={600} offset={-50}> */}
      {chatData.length === 0 ? (
        // ローディング処理を入れる
        <span>ローディング中です.....</span>
      ) : (
        chatData.map((item) => (
          <div key={item.key}>
            {item.userName === userNameData && item.userId === userIdData ? (
              <SChatRight>
                <Icon photoUrl={imageUrl} />
                <SChatRightText>{item.text}</SChatRightText>
                <p>{item.createdAt}</p>
              </SChatRight>
            ) : (
              <div>
                <div>
                  <Icon photoUrl={item.imageUrl} />
                  <SChatLeftText>{item.text}</SChatLeftText>
                  <p>{`${item.userName}`}</p>
                </div>

                <p>{item.createdAt}</p>
              </div>
            )}
          </div>
        ))
      )}
      {/* </Link> */}
    </SBody>
  );
};

// const SChatContainer = styled.div``;
const SBody = styled.div`
  background-color: #93aad4;
  margin: 0;
  padding: 0;
`;

const SChatRight = styled.div`
  text-align: end;
`;

const SChatRightText = styled.p`
  position: relative;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #85e14b;
  border-radius: 15px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -24px;
    margin-top: -12px;
    border: 12px solid transparent;
  }
`;

const SChatLeftText = styled.p`
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fff;
  border-radius: 15px;
  &before: {
    content: "";
    position: absolute;
    top: 50%;
    left: -24px;
    margin-top: -12px;
    border: 12px solid transparent;
  }
`;
