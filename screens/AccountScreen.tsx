import React from "react";
import { Text } from "react-native";
import { TopNav } from "../components/navigation/TopNav";
import { SafeAreaViewWrapper } from "../components/SafeAreaViewWrapper";

export const AccountScreen: React.FC = (): React.JSX.Element => {
  return(
    <SafeAreaViewWrapper>
     <TopNav />
     <Text style={{ 
      textAlign: 'center', 
      fontSize: 50, 
      fontWeight: "800", 
      padding:15}}>Account Screens</Text>
    </SafeAreaViewWrapper>
  )
}