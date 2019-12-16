import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import Styles from './styles';

export default class Dropdown extends Component {
	state = {
		show: false,
		disabled: false
	};

	static get propTypes() {
		return {
			label: PropTypes.string,
      width: PropTypes.number,

      // styles
      buttonStyle: PropTypes.object,
      buttonStyleActive: PropTypes.object,
      dropbtnText: PropTypes.object
		};
	}

	static defaultProps = {
		label: 'Seç',
    width: 100,

    // Styles
    buttonStyle: {},
    buttonStyleActive: {}
	};

	onPress() {
		return this.setState({
			show: !this.state.show
		});
	}

	hide() {
		return this.setState({ disabled: false, show: false });
	}

	disable() {
		return this.setState({
			disabled: true
		});
	}

	render() {
		const { label, width, buttonStyleActive, buttonStyle, dropbtnText } = this.props;
		const { show, disabled } = this.state;

		return (
			<View style={[ Styles.dropdown, { width } ]}>
				<TouchableOpacity
					disabled={disabled}
					style={[
						Styles.dropbtn,
						show && { ...Styles.dropbtnActive, ...buttonStyleActive },
						buttonStyle
					]}
					onPress={this.onPress.bind(this)}
				>
					<Text style={[Styles.dropbtnText, dropbtnText]}>{label}</Text>
				</TouchableOpacity>

				{show && (
					<View style={Styles.dropdownContent}>
						{React.Children.map(this.props.children, (child, i) => {
							const isLast = this.props.children.length === i + 1;

							return React.cloneElement(child, {
								isLast,
								isDisable: disabled,
								done: this.hide.bind(this),
								setDisabled: this.disable.bind(this)
							});
						})}
					</View>
				)}
			</View>
		);
	}
}

export class DropdownItem extends Component {
	state = {
		loading: false
	};

	done() {
		return this.setState({ loading: false }, this.props.done);
	}

	onPress() {
		const { onPress, isDone = false, done, setDisabled } = this.props;

		if (onPress) {
			// isDone press
			if (isDone) {
				// disable all
				setDisabled();

				return this.setState(
					{
						loading: true
					},
					onPress(() => this.done())
				);
			}

			// auto hide;
			done();

			return onPress();
		}
	}

	render() {
		const { label, isLast, isDone, isDisable } = this.props;
		const { loading } = this.state;

		return (
			<TouchableOpacity
				disabled={!isDone && isDisable}
				style={[ Styles.dropbtnItem, isLast && Styles.dropbtnItemLast ]}
				onPress={this.onPress.bind(this)}
			>
				{loading ? (
					<ActivityIndicator size="small" color="#333" />
				) : (
					<Text style={Styles.dropbtnText}>{label}</Text>
				)}
			</TouchableOpacity>
		);
	}
}
