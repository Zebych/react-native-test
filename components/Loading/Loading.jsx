import React from 'react';
import {ActivityIndicator} from "react-native";
import styled from "styled-components/native"

const Preloader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PreloaderTitle = styled.Text`
  margin-top: 15px;
  color: #2e91c2;
  font-size: 12px;
  font-weight: 700;
`;


const Loading = () => {
    return (
        <Preloader>
            <ActivityIndicator size={"large"} color={'#2e91c2'}/>
            <PreloaderTitle>Загрузка...</PreloaderTitle>
        </Preloader>
    );
};

export default Loading;