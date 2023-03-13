import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import SplashScreen from "../BhookApp/src/compoenents/SplashScreen";
import CreateAccount from "../BhookApp/src/compoenents/CreateAccount";
import Login from "../BhookApp/src/compoenents/Login";
import Slider1 from "../BhookApp/src/compoenents/Slider1";
import Slider2 from "../BhookApp/src/compoenents/Slider2";
import Slider3 from "../BhookApp/src/compoenents/Slider3";
import Home from "../BhookApp/src/compoenents/Home";
import Navbar from "../BhookApp/src/compoenents/Navbar";
import Dish from "./src/compoenents/Dish";
import AddDeliveryAddress from "./src/compoenents/AddDeliveryAddress";
import OrderSummary from "./src/compoenents/OrderSummary";
import Payment from "./src/compoenents/Payment";
import LikeDishes from "./src/compoenents/LikeDishes";
import Profile from "./src/compoenents/Profile";
import TrackOrder from "./src/compoenents/TrackOrder";
import PaymentMethod from "./src/compoenents/PaymentMethod";
import TrackOrdersMain from "./src/compoenents/TrackOrdersMain";
import Search from "./src/compoenents/Search";
import Store from "./src/compoenents/Store";
import ForgotPassword from "./src/compoenents/ForgotPassword";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={SplashScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Slider1" component={Slider1} />
        <Stack.Screen name="Slider2" component={Slider2} />
        <Stack.Screen name="Slider3" component={Slider3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Dish" component={Dish} />
        <Stack.Screen
          name="AddDeliveryAddress"
          component={AddDeliveryAddress}
        />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="LikeDishes" component={LikeDishes} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="TrackOrdersMain" component={TrackOrdersMain} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
