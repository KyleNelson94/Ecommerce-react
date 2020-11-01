import * as React from 'react';
import { useFormik } from 'formik';

interface Props {
  isAuthenticated: boolean;
}

function Login ({isAuthenticated}:Props) {

  const[isLoading, setIsLoading] = React.useState(false);
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: (values) => alert(values)
  });


  if(!isLoading) {
    return (
      <form>
        <fieldset>
          <input type="text" placeholder="Username" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Password" security="true" />
        </fieldset>
      </form>
    );
  } else {  
    return<p>Component is loading...</p>;
  }
};

export default Login;