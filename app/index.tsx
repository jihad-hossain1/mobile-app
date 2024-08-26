// import { Text, View } from "react-native";
import { Text, View } from 'react-native';
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App(){

    return (
        <View className='flex-1 items-center justify-center bg-white'>
            <Text>Hello World!</Text>
            <StatusBar style="auto" />
            <Link href={'/profile'} className='text-blue-500'>Go to Profile</Link>
        </View>
    )
}
