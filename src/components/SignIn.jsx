import { View, Pressable, Alert,StyleSheet } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";



const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor : theme.colors.secondaryBackground,
  },
  loginButton:{
    backgroundColor: theme.colors.primaryTagBackground,
    padding: 20,
    borderRadius:15,
  },
  loginButtonText: {
    color : '#fff',
    textAlign: 'center',
  }
});


const validationSchema = yup.object().shape({
  username : yup
    .string()
    .required('Username is required'),
  password : yup
    .string()
    .required('Password is required'),
});




const initialValues = {
  username: '',
  password: '',
};


const LoginForm = ({ onSubmit }) => {


  return(
    <View style={styles.loginContainer}>
      <FormikTextInput name='username' placeholder="Username"/>
      <FormikTextInput autoCapitalize={'none'} secureTextEntry={true} name="password" placeholder="Password"/>
      <Pressable style={styles.loginButton} onPress={onSubmit}>
        <Text fontWeight='bold' fontSize="subheading" style={styles.loginButtonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}



const SignIn = () => {

  const onSubmit = values => {
    Alert.alert(`logging in ${JSON.stringify(values)}`);
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
    </>
  );
}

export default SignIn;