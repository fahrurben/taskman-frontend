import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AUTH_TOKEN_KEY } from '../../../constant';

export default function DefaultLayout({ children }) {
  const history = useHistory();

  const logoutClicked = () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    history.push('/');
  };

  return (
    <div id="root" className="uk-flex uk-flex-left">
      <div id="sidebar">
        <div className="sidebar-header">
          Taskman
        </div>
        <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
          <li className="">
            <a
              href="#"
            >
              Task
            </a>
          </li>
          <li className="">
            <a
              href="#"
            >
              Project
            </a>
          </li>
        </ul>
      </div>
      <div id="main" className="uk-flex-1">
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-right">

            <ul className="uk-navbar-nav">
              <li><a href="#" onClick={logoutClicked}>Logout</a></li>
            </ul>

          </div>
        </nav>
        <div>
          { children }
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
