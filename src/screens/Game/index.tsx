import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { Background } from "../../components/Background";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;
  console.log(game);
  return (
    <Background>
      <Text>
        <SafeAreaView style={styles.container}></SafeAreaView>
      </Text>
    </Background>
  );
}
