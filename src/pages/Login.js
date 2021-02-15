import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import UIkit from 'uikit';
import { fetchInitial, authenticate, reset } from '../redux-modules/login/actions';
import { SUBMITTED } from '../constant';

function Login() {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.login.status);
  const isLoading = useSelector((state) => state.login.isLoading);
  const response = useSelector((state) => state.login.response);

  const onFormSubmit = (data) => {
    dispatch(authenticate(data));
  };

  useEffect(() => {
    dispatch(fetchInitial());
  }, []);

  useEffect(() => {
  }, [response]);

  useEffect(() => {
    if (status === SUBMITTED) {
      UIkit.notification({ message: 'Login success', status: 'success' });
      dispatch(reset());
      history.push('/task');
    }
  }, [status]);

  const emailValidation = { required: { value: true, message: 'Email is required' } };
  const passwordValidation = { required: { value: true, message: 'Password is required' } };

  const formClass = classNames(
    {
      'uk-hidden': isLoading,
    },
  );
  const spinnerClass = classNames(
    'uk-text-center',
    {
      'uk-hidden': !isLoading,
    },
  );
  return (
    <div className="uk-container">
      <div className="uk-grid uk-flex-center uk-flex-middle login-main-container">
        <div>
          <div className="uk-card uk-card-default uk-card-body login-body-container">
            <form className={formClass}>
              <fieldset className="uk-fieldset">

                <legend className="uk-legend">Login</legend>
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
                    <span className="uk-form-icon" data-uk-icon="icon: user" />
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
                    <span className="uk-form-icon" data-uk-icon="icon: lock" />
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

                <div className="uk-margin uk-clearfix">
                  <button
                    type="button"
                    className="uk-button uk-button-primary uk-float-right"
                    onClick={handleSubmit(onFormSubmit)}
                  >
                    Login
                  </button>
                  <a href="/register" className="uk-link-text uk-float-left uk-margin-small-top">Register</a>
                </div>

              </fieldset>
            </form>
            <div className={spinnerClass}>
              <span className="uk-margin-small-right" data-uk-spinner="ratio: 1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
