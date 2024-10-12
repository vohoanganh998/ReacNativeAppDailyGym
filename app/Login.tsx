import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ButtonCore } from '@/components/core/ButtonCore';

const Login = () => {
  return (
    <View>
        <View>
            <View style={styles.container}>
                <Image
                source={require('@/assets/images/logo.png')}
                style={styles.reactLogo}
                />
            </View>
        <Text style={styles.center}>Đăng Nhập</Text>
        <ButtonCore title="Đăng Nhập" />
        </View>
    </View>
  )
}
 
export default Login
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    reactLogo: {
        height: 70,
        width: 70
    },
    center: {
        textAlign: 'center'
    }
});
  