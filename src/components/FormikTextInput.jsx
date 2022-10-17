import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    color : '#d73a4a',
    marginBottom: 10
  },
  textFieldStyle: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  textInvalid: {
    borderColor: '#d73a4a',
  },
  textValid: {
    borderColor: theme.colors.textSecondary,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  //TODO ADD RED COLOR WHEN ERROR ON TEXTINPUT
  return (
    <>
      <TextInput style={[styles.textFieldStyle, showError? styles.textInvalid : styles.textValid]}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;