import { Tabs } from "expo-router"

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home"
                options={{
                title: 'asdasdasdasdas',
            }}></Tabs.Screen>
            <Tabs.Screen name="list"></Tabs.Screen>
        </Tabs>
    )
}