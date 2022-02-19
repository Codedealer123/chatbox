import {FlatList, TouchableOpacity} from 'react-native';

import LabelListItem from './labelListItem';
import Labels from '../data/Labels';
import { View, Text } from './Themed';
import tw from 'twrnc'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
const LabelList = () => {
    const colorScheme = useColorScheme()
    return (

        <View>
            <FlatList 
                scrollEnabled = {false}
                data={Labels}
                style={[tw``,{width: "100%"}]}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                   <LabelListItem label = {item} /> 
                )}
                ItemSeparatorComponent = {() => (
                    <View style = {[tw`border-b`, {borderBottomColor: Colors[colorScheme].backgroundOpac}]}></View>
                )}
            />
            {/* add Label button */}
            <View style={[tw` ml-5 my-1 py-1 border-b border-t`, {borderColor: Colors[colorScheme].backgroundOpac}]}>
                <TouchableOpacity activeOpacity = {.7} onPress={() => alert("Add Label")}>
                        <Text style = {[tw`text-lg `, {color: Colors.light.tint}]}>Add New Label</Text>
                </TouchableOpacity>
            </View>

            <View style = {tw`flex-row justify-center mt-2`}>
                <Text style={[{color: Colors.light.tabIconDefault, fontSize: 12}]}>Use labels to organize your customers and chats. </Text>
                <TouchableOpacity activeOpacity = {.7}>
                    <Text  style = {[{color: Colors.light.tint, fontSize: 12}]}> Learn more</Text>
                </TouchableOpacity>
            </View>
        </View>

    );

}

export default LabelList;