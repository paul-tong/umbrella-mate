import {StyleSheet} from 'react-native'

export const small = {
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 75
};
  
export const rounded = {
    borderRadius: 50
};

export const ButtonStyle = StyleSheet.create({
    normal: {
        ...small, // can expand other objects
        ...rounded,
        backgroundColor: 'red'
    }
});