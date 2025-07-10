import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import Home from "./src/home";
import ViewArticle from "./src/view-article";
import Bookmark from "./src/bookmark";
import Settings from "./src/settings";
import EditProfile from "./src/edit-profile";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dashboard Stack
const HomeScreens = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={Home}
        />
        <Stack.Screen
            name="View Article"
            component={ViewArticle}
        />
    </Stack.Navigator>
);

const BookmarkScreens = () => (
    <Stack.Navigator initialRouteName="Bookmarks">
        <Stack.Screen
            name="Bookmark"
            component={Bookmark}
        />
    </Stack.Navigator>
);

const SettingScreens = () => (
    <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen
            name="Settings"
            component={Settings}
        />
        <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
        />
    </Stack.Navigator>
);



const Tabs = () => (
    <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={HomeScreens} options={{ headerShown: false }}/>
        <Tab.Screen name="Bookmarks" component={BookmarkScreens} options={{ headerShown: false }}/>
        <Tab.Screen name="Account" component={SettingScreens} options={{ headerShown: false }}/>
    </Tab.Navigator>
);

export default Tabs;