import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native'
import axios from "axios";
import {Alert} from "react-native";
import Loading from "../components/Loading/Loading";

const PostContainer = styled.View`
  padding: 15px;
  justify-content: flex-start;
`;
const PostTitle = styled.Text``;
const PostImage = styled.Image`
  width: 170px;
  height: 170px;
  border-radius: 12px;
  margin-right: 12px;
`;
const PostBlock = styled.View`
`;

export const FullPost = ({route, navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState({})
    const {id, title} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title
        })
        axios.get(`https://630ccb5c53a833c534353746.mockapi.io/posts/` + id)
            .then(({data}) => {
                console.log(data)
                setItem(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Ошибка', 'Не удалось получить статью')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) return <Loading/>

    return (
        <PostContainer>
            <PostImage source={{uri: item.avatar}}/>
            <PostBlock>
                <PostTitle>{item.name}</PostTitle>
                <PostTitle>{item.text}</PostTitle>

            </PostBlock>
        </PostContainer>
    );
};
