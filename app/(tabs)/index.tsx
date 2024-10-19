import { View } from 'react-native';
import { useSelect } from '@/hooks/useSelect';
import { useEffect, useState } from 'react';
import { ProductSchema } from '@/@types/productSchema';
import { useThumbnails } from '@/hooks/useThumbnails';
import { HeaderSearchBar } from '@/components/HeaderSearchBar';
import { Colors } from '@/constants/Colors';
import { ListItem } from '@/components/ListItem';
import { FlatList, RefreshControl, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();
    const initialValue = {
        tableName: "products",
        selectColumns: ['title', 'bucket_name', 'bucket_folder', 'id'],
        limit: 10,
    }
    const { selectResponse, selectData, selectResponseError } = useSelect<ProductSchema>(initialValue)

    const { fetchThumbnailList, thumbList } = useThumbnails();

    useEffect(() => {
        if (!selectResponse) return;

        const thumbData = Object.values(selectResponse).map((item) => {
            return {
                bucket_name: item.bucket_name,
                bucket_folder: item.bucket_folder,
                id: item.id
            }
        })

        fetchThumbnailList(thumbData)
    }, [selectResponse])

    const onRefresh = () => {
        setRefreshing(true);

        selectData(initialValue)

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    const handleNavigate = (id: string) => {
        // navigation.navigate("", {itemId: id})
    }


    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.dark.icon,
        }}>
            <HeaderSearchBar
                headerMaxHeight={230}
                headerMinHeight={190}
                subTitle='Administrativo'
            />
            <FlatList
                data={selectResponse ? Object.values(selectResponse) : []}
                scrollEventThrottle={16}
                style={{ width: '95%' }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleNavigate(item.id)}>
                        <ListItem
                            key={item.id}
                            title={item.title}
                            thumb={thumbList[item.id]}
                        />
                    </TouchableOpacity>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />

            <Button
                onPress={() => selectData(initialValue)}
                mode='contained'
                style={{ marginVertical: 20 }}
            >
                Atualizar Lista
            </Button>
        </View>
    );
}