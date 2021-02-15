import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import { register as registerUser, reset } from '../redux-modules/register/actions';
import { SUBMITTED } from '../constant';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.register.status);
  const response = useSelector((state) => state.register.response);

  const onFormSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
  }, [response]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Register success', status: 'success' });
      dispatch(reset());
      history.push('/login');
    }
  }, [status]);

  const emailValidation = { required: { value: true, message: 'Email is required' } };
  const passwordValidation = { required: { value: true, message: 'Password is required' } };
  const firstNameValidation = { required: { value: true, message: 'First Name is required' } };
  const lastNameValidation = { required: { value: true, message: 'Last Name is required' } };

  return (
    <div className="uk-container">
      <div className="uk-grid uk-flex-center uk-flex-middle login-main-container">
        <div>
          <div className="uk-card uk-card-default uk-card-body login-body-container">
            <form>
              <fieldset className="uk-fieldset">

                <legend className="uk-legend">Register</legend>
                {
                  response.message
                  && (
                    <div className="uk-alert-danger" data-uk-alert>
                      <p>{response.message}</p>
                    </div>
                  )
                }
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <input
                      className="uk-input"
                      name="email"
                      type="text"
                      placeholder="Email"
                      ref={register(emailValidation)}
                    />
                  </div>
                  {
                    errors.email
                    && <div className="uk-text-danger">{errors.email.message}</div>
                  }
                </div>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <input
                      className="uk-input"
                      name="password"
                      type="password"
                      placeholder="Password"
                      ref={register(passwordValidation)}
                    />
                  </div>
                  {
                    errors.password
                    && <div className="uk-text-danger">{errors.password?.message}</div>
                  }
                </div>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <input
                      className="uk-input"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      ref={register(firstNameValidation)}
                    />
                  </div>
                  {
                    errors.firstName
                    && <div className="uk-text-danger">{errors.firstName.message}</div>
                  }
                </div>

                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <input
                      className="uk-input"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      ref={register(lastNameValidation)}
                    />
                  </div>
                  {
                    errors.lastName
                    && <div className="uk-text-danger">{errors.lastName.message}</div>
                  }
                </div>

                <div className="uk-margin uk-clearfix">
                  <Link class="uk-button uk-button-default uk-modal-close" type="button" to="/">Cancel</Link>
                  &nbsp;
                  <button
                    type="button"
                    className="uk-button uk-button-primary uk-float-right"
                    onClick={handleSubmit(onFormSubmit)}
                  >
                    Submit
                  </button>
                </div>

              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
