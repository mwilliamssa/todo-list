import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
		height: 64,
		backgroundColor: theme.colors.base.gray500,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 4,
		paddingHorizontal: 12,
		paddingVertical: 20,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: theme.colors.base.gray400,
  },
  textContainer:{
    width: '80%',
		height: 40,
		marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDone:{
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
    textDecorationLine: 'line-through'
  },
  textCreated:{
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
    textDecorationLine: 'none'
  },
  circle:{
    color: theme.colors.brand.blue
  },
  circleHovered:{
    color: theme.colors.brand.blue_dark
  },
  checkCircle:{
    color: theme.colors.brand.purple_dark,
  },
  checkCircleHovered:{
    color: theme.colors.brand.purple
  },
  trash:{
    color: theme.colors.base.gray300
  },
  trashHovered:{
    color: '#E25858',
  },
  btnDel:{
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnDelHovered:{
    backgroundColor: theme.colors.base.gray400,
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})