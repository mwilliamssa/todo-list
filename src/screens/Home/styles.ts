import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.colors.base.gray700,
    flex: 1,
    alignItems: 'center',
  },
  teste:{
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.lg,
  }
})