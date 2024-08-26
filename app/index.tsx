// import { Text, View } from "react-native";
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App(){

    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-3xl font-bold'>Hello World!</Text>
            <StatusBar style="auto" />
            <Link href={'/home'} className='bg-blue-600 text-gray-50 px-4 py-2 rounded  border border-gray-400 shadow-[0_1px_2px_rgba(0,0,0,0.1)]'>Home</Link>
        </View>
    )
}
