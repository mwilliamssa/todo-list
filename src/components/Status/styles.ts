import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  statusName:{
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.md,
  },
  containerNumber:{
    backgroundColor: theme.colors.base.gray400,
    height: 19,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 999,
    marginLeft: 8
  },
  statusNumber:{
    color: theme.colors.base.gray200
  },
  statusDone:{
    color: theme.colors.brand.purple
  },
  statusCreated:{
    color: theme.colors.brand.blue
  },
})