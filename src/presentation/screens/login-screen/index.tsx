import {memo, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import {Separator} from '../../widgets/separator';
import CustomTextVariant, {TextToken} from '../../widgets/custom-text-variant';
import TYPOGRAPHY from '../../styles/typography';
import {
  Button,
  OTPInputBox,
  StandaloneTextInput,
  StandaloneTextInputType,
} from 'rn-central-dls';
import {debounce} from '../../../utils/codeUtils';
import {IS_IOS} from '../../../utitlites/display';
import GLOBAL from '../../styles/global';
import CButton from '../../widgets/cButton';

type Props = {};

const LoginScreen = (props: Props) => {
  const [regNo, setRegNo] = useState({value: '', error: ''});
  const [phoneNum, setPhoneNum] = useState({value: '', error: ''});
  const [showOtp, setShowOtp] = useState(true);
  return (
    <ScreenWrapper>
      {showOtp ? (
        <View>
          <Separator height={48} />
          <View style={styles.ph16}>
            <CustomTextVariant
              fontColor={TYPOGRAPHY.Color.white}
              variant={TextToken.HEADING1_BOLD}>
              Enter OTP
            </CustomTextVariant>
          </View>
          <Separator height={4} />
          <View style={[GLOBAL.Layout.rowCentering, styles.ph16]}>
            <CustomTextVariant
              fontColor={TYPOGRAPHY.Color.sirocco}
              variant={TextToken.BODY_REGULAR}>
              sent to mobile number
            </CustomTextVariant>
            <CustomTextVariant
              fontColor={TYPOGRAPHY.Color.white}
              variant={TextToken.BODY_REGULAR}>
              {` +91-9938736718`}
            </CustomTextVariant>
            <CButton onClick={() => {}} style={styles.ml8}>
              <CustomTextVariant
                fontColor={TYPOGRAPHY.Color.aquaMarine}
                variant={TextToken.BODY_REGULAR}>
                {'Edit'}
              </CustomTextVariant>
            </CButton>
          </View>
          <Separator height={32} />
          <OTPInputBox maxOTPSize={4} onOTPEnteredCompleted={otp => {}} />
          {/**
           * TOOD: When time stops show retry button
        
           */}
          <Separator height={8} />
          {true ? (
            <View style={styles.ph16}>
              <CustomTextVariant
                variant={TextToken.BODY_REGULAR}
                fontColor={TYPOGRAPHY.Color.sirocco}>
                Didn’t receive it? Retry in 00:12
              </CustomTextVariant>
            </View>
          ) : (
            <CButton onClick={() => {}} style={styles.ph16}>
              <CustomTextVariant
                fontColor={TYPOGRAPHY.Color.aquaMarine}
                variant={TextToken.BODY_REGULAR}>
                {'Retry'}
              </CustomTextVariant>
            </CButton>
          )}
          <Separator height={24} />
          <View style={styles.ph16}>
            <Button title="Proceed" onPress={() => {}} size="LARGE" />
          </View>
        </View>
      ) : (
        <View style={styles.ph16}>
          <Separator height={48} />
          <CustomTextVariant
            fontColor={TYPOGRAPHY.Color.white}
            variant={TextToken.HEADING1_BOLD}>
            Registration Number
          </CustomTextVariant>
          <Separator height={16} />
          <StandaloneTextInput
            type={StandaloneTextInputType.VEHICLE_NO}
            onChangeText={debounce(value => setRegNo({value, error: ''}), 500)}
            showError={!!regNo?.error}
            value={regNo?.value}
            keyboardType={!IS_IOS ? 'visible-password' : undefined}
            hint={regNo?.error}
          />
          <Separator height={24} />
          <CustomTextVariant
            fontColor={TYPOGRAPHY.Color.white}
            variant={TextToken.HEADING1_BOLD}>
            Phone Number
          </CustomTextVariant>
          <Separator height={16} />
          <StandaloneTextInput
            type={StandaloneTextInputType.PHONE_NUMBER}
            onChangeText={debounce(
              value => setPhoneNum({value, error: ''}),
              500,
            )}
            showError={!!phoneNum?.error}
            value={phoneNum?.value}
            keyboardType={!IS_IOS ? 'visible-password' : undefined}
            hint={phoneNum?.error}
          />
          <Separator height={24} />
          <Button title="Proceed" onPress={() => {}} size="LARGE" />
        </View>
      )}
    </ScreenWrapper>
  );
};

export default memo(LoginScreen);

const styles = StyleSheet.create({
  ph16: {paddingHorizontal: 16},
  ml8: {marginLeft: 8},
});
