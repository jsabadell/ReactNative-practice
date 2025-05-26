import { Link } from "expo-router";
import { Text, View } from "react-native";
import onboarding from "./onboarding";


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">

      <Text className="text-5xl text-dark-200 font-bold">Vambora pae.</Text>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
