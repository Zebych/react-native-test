import styled from "styled-components/native";
import {StyleSheet} from "react-native";

const PostView = styled.View`
  padding: 0 15px 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const PostDate = styled.Text`
  font-size: 12px;
  font-weight: 700;
  opacity: .5;
`;

const PostDetails = styled.View`
  padding: 15px 15px 0;
  flex-direction: row;
  align-items: center;
`;

const PostBlock = styled.View`
  flex: 1;
  justify-content: center;
`

export const Post = (
    {
        title, imageUrl, createdAt, description
    }
) => {
    return (<>
        <PostDetails>
            <PostImage source={{uri: imageUrl}}/>
            <PostBlock>
                <PostTitle>{title}</PostTitle>
                <PostTitle>{description}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostBlock>

        </PostDetails>
        <PostView/>
    </>)
}
