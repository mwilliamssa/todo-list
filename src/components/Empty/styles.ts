import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    paddingTop: 40,
    borderTopWidth: 0.6,
    borderTopColor: theme.colors.base.gray400 
  },
  image:{
    marginBottom: 15
  },
  topText:{
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
  },
  bottomText:{
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300
  }
})