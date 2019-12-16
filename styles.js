import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	dropbtn: {
		backgroundColor: '#f6f7f9',
		height: 50,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#cad1d8'
	},

	dropbtnActive: {
		borderColor: '#88bfff',
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		borderBottomWidth: 0
	},

	dropbtnText: {
		fontWeight: '200',
		color: '#4f6278',
		fontSize: 16
	},

	dropdown: {
		position: 'relative',
		zIndex: 1
	},

	dropdownContent: {
		position: 'absolute',
		top: 50,
		borderWidth: 1,
		borderColor: '#88bfff',
		borderTopWidth: 0,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		backgroundColor: 'white',
		width: '100%'
	},

	dropbtnItem: {
		borderBottomWidth: 1,
		borderBottomColor: '#cad1d8',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},

	dropbtnItemLast: {
		borderBottomWidth: 0
	}
});