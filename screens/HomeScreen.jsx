import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ActivityIndicator, Alert, FlatList, RefreshControl, StatusBar, TouchableOpacity, View} from "react-native";
import {Post} from "../components/Post/Post";
import Loading from "../components/Loading/Loading";


const HomeScreen = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [items, setItems] = useState([])

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://630ccb5c53a833c534353746.mockapi.io/posts')
            .then(({data}) => {
                setItems(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Ошибка', 'Не удалось получить статьи')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(fetchPosts, [])

    if (isLoading) return <Loading/>

    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={isLoading}
                                            onRefresh={fetchPosts}/>}//запрос за данными при свайпе
            data={items}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullPost',{id:item.id,title:item.name})}>
                    <Post createdAt={item.createdAt} title={item.name} imageUrl={item.avatar}
                          description={item.text}/>
                </TouchableOpacity>
            )}/>
    );
};

export default HomeScreen;