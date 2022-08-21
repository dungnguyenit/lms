import React, { useCallback } from 'react';
import logo from 'assets/icon/logo.svg';
import styles from './login.module.scss';
import { Button } from 'components/button';
import Languages from 'commons/languages';
import { useNavigate } from 'react-router-dom';
import { Paths } from 'routers/paths';
// import { useAppStore } from 'hooks';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();

    const onLogin = useCallback(async() => {
        // const response = await apiServices.common.checkAppState();
        // console.log(response);
        // userManager.updateDemo(response.data);

        navigate(Paths.contract);
    }, [navigate]);

    return (
        <div className={cx('app')}>
            <img src={logo} className={cx('app-logo')} alt="logo" />
            <p>
                aaaaaaa
            </p>

            <Button
                label={Languages.login.login}
                onPress={onLogin}
                buttonStyle={'RED'}
            />
        </div>
    );
}

export default Login;
