import { Text, type ButtonProps, StyleSheet, TouchableOpacity } from 'react-native';
import { colorTheme } from '@/constants/Colors'

export type ButtonCoreProps = ButtonProps & {
    title?: string;
    onPress?: Function;
    type?:string,
  };

export function ButtonCore({
    title = 'Learn Moreaaaaaaa',
    onPress,
    type = 'default',
    ...rest
}: ButtonCoreProps) {
    const TouchableStyle = () => {
        switch (type) {
            default: return styles.default
        }
    }
    const TextStyle = () => {
        switch (type) {
            default: return styles.defaultText
        }
    }
    return (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, TouchableStyle()]} {...rest}>
            <Text style={[styles.appButtonText, TextStyle()]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      borderRadius: 50,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 2,
      alignSelf: 'center',
    },
    appButtonText: {
      fontSize: 14,
      alignSelf: "center",
    },
    default: {
        borderColor: colorTheme,
    },
    defaultText: {
        color: colorTheme
    }
  });
  