import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  containerMain:{
    backgroundColor: theme.colors.base.gray600,
    paddingHorizontal: 24
  },
  statusContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25
  },
  container:{
    marginTop: -30,
    flexDirection: 'row',
    height: 54,
    marginBottom: 40
  },
  input: {
    backgroundColor: theme.colors.base.gray500,
    padding: 16,
    flex: 1,
    color: theme.colors.base.gray100,
    fontFamily: theme.font_family.regular,
    fontSize: theme.font_size.lg,
    marginRight: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  btnAddHovered:{
    backgroundColor: theme.colors.brand.blue
  },
  btnAdd:{
    backgroundColor: theme.colors.brand.blue_dark,
    width: 54,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
})