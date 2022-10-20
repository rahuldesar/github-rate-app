import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';
// import AuthStorage from "../utils/authStorage";
import { useNavigate } from "react-router-native";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import useSignIn from "../../hooks/useSignIn";



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
      <FormikTextInput name='username' placeholder="kalle"/>
      <FormikTextInput autoCapitalize={'none'} secureTextEntry={true} name="password" placeholder="Password"/>
      <Pressable style={styles.loginButton} onPress={onSubmit}>
        <Text fontWeight='bold' fontSize="subheading" style={styles.loginButtonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}


const SignIn = () => {
  const [signIn] = useSignIn();
  // const user1 = new AuthStorage();
  const navigate = useNavigate();

  const onSubmit =async(values)  => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      // ! NOT SURE IF I SHOULD REMOVE THIS >> BUT IT WORKS.
      // * SETTING UP TOKEN AND RESETTING STORE IS DONT BY useSignIn hook.
      // await user1.setAccessToken(data.authenticate.accessToken);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
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