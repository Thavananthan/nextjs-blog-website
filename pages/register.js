import RegisterForm from "@/components/forms/RegisterForm";
import { Mutation } from "react-apollo";
import { SIGN_UP } from "@/apollo/queries";
import { useSignUp } from "@/apollo/actions";

import withApollo from "@/hoc/withApollo";
import Redirect from "@/components/shared/Redirect";

const Register = () => {
  const errorMessage = (error) => {
    return error;
  };

  const [signup, { data, loading, error }] = useSignUp();

  const signUp = (data) => {
    alert(JSON.stringify(data));
    signup({ variables: data });
  };

  return (
    <>
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Register</h1>

            <RegisterForm
              onSubmit={(registerData) => {
                signUp(registerData);
              }}
            />
            {data && data.signUp && <Redirect to="/login" />}
            {error && (
              <div className="alert alert-danger">{errorMessage(error)}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withApollo(Register);
