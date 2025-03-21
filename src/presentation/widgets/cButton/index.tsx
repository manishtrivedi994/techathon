import {memo, PureComponent} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import GLOBAL from '../../styles/global';
import {debounce} from '../../../utils/codeUtils';

export type ButtonProps = {
  clickEventData?: object;
  children: any;
  onClick?: () => void;
  disabled?: boolean;
  testID?: string;
  debounceDuration?: number;
} & Omit<TouchableOpacityProps, 'onPress'>;

export const DEFAULT_BTN_DEBOUNCE = 250;

class CButton extends PureComponent<ButtonProps> {
  static defaultProps = {
    style: GLOBAL.Text.Default,
    disabled: false,
    debounceDuration: DEFAULT_BTN_DEBOUNCE,
  };
  onButtonPress = debounce(
    onClick => onClick?.(),
    this.props.debounceDuration,
    true,
  );
  render() {
    const {style, children, onClick, disabled, clickEventData} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
        clickEventData={clickEventData}
        style={[style]}
        onPress={() => {
          this.onButtonPress(onClick);
        }}
        {...this.props}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default memo(CButton);
