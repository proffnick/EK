import React from "react";
import { Text } from "react-native";
import { TopNav } from "../components/navigation/TopNav";
import { SafeAreaViewWrapper } from "../components/SafeAreaViewWrapper";

export const ReportsScreen: React.FC = (): React.JSX.Element => {
  return(
    <SafeAreaViewWrapper>
     <TopNav />
     <Text style={{ 
      textAlign: 'center', 
      fontSize: 50, 
      fontWeight: "800", 
      padding:15}}>Reports Screen</Text>
    </SafeAreaViewWrapper>
  )
}