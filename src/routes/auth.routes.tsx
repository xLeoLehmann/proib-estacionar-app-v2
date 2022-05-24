import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { Register } from '@screens/Register';
import { Teste } from '@screens/Teste';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="register" component={Register} />
      <Screen name="teste" component={Teste} />
    </Navigator>
  );
}