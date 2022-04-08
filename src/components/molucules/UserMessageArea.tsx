/* packages */
import React from "react";
import moment from "moment";
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
                <STime>{moment(item.createdAt).fromNow()}</STime>
                <SChatRightText>{item.text}</SChatRightText>
                <Icon photoUrl={imageUrl} />
              </SChatRight>
            ) : (
              <SChatLeft>
                <SChatFlex>
                  <Icon photoUrl={item.imageUrl} />
                  <SChatLeftText>{item.text}</SChatLeftText>
                  <STime>{moment(item.createdAt).fromNow()}</STime>
                </SChatFlex>
                <SName>{`${item.userName}`}</SName>
              </SChatLeft>
            )}
          </div>
        ))
      )}
      {/* </Link> */}z
    </SBody>
  );
};

const SChatLeft = styled.div`
  padding: 10px 0 5px;
`;

const SChatRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const SBody = styled.div`
  background-color: #93aad4;
  margin: 0;
  padding: 0;
`;

const SName = styled.div`
  font-size: 8px;
  color: gray;
  padding-left: 50px;
`;
const STime = styled.p`
  color: gray;
  padding: 25px 5px 0;
  font-size: 8px;
`;

const SChatFlex = styled.div`
  display: flex;
`;

const SChatRightText = styled.p`
  position: relative;
  display: inline-block;
  margin: 10px 0 10px;
  padding: 5px 10px 5px;
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
    border: 15px solid transparent;
    margin: 0;
  }
`;

const SChatLeftText = styled.p`
  position: relative;
  display: inline-block;
  margin: 10px 0 10px;
  padding: 5px 10px 5px;
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
    margin-top: -10px;
    border: 15px solid transparent;
  }
`;
