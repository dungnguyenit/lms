import classNames from 'classnames/bind';
import React, { useCallback, useRef } from 'react';
import style from './header.module.scss';

import Languages from 'commons/languages';
import { useAppStore } from 'hooks';
import Marquee from 'react-fast-marquee';

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import { Badge } from '@mui/material';
import IcCart from 'assets/icon/menu/cart.svg';
import IcLogo from 'assets/icon/menu/logo.svg';
import IcNotification from 'assets/icon/menu/notification.svg';
import IcTelegram from 'assets/icon/menu/telegram.svg';
import IcTelephone from 'assets/icon/menu/telephone.svg';

import ModalCart from './components/modal-cart';
import { ModalCartActions } from './components/modal-cart/types';
import ModalNotification from './components/modal-notification';
import { ModalNotificationActions } from './components/modal-notification/types';
import ModalTelegram from './components/modal-telegram';
import { ModalTelegramActions } from './components/modal-telegram/types';
import ModalTelephone from './components/telephone';
import { ModalTelephoneActions } from './components/telephone/types';
import ModalLogin from './components/modal-login';
import { ModalLoginActions } from './components/modal-login/types';

const cx = classNames.bind(style);

function Header() {
    const { userManager } = useAppStore();
    const refModalNotification = useRef<ModalNotificationActions>(null);
    const refModalCart = useRef<ModalCartActions>(null);
    const refModalTelegram = useRef<ModalTelegramActions>(null);
    const refModalTelephone = useRef<ModalTelephoneActions>(null);
    const refModalLogin = useRef<ModalLoginActions>(null);

    const showModalNotify = useCallback(() => {
        refModalNotification.current?.showModal();
    }, []);

    const showModalCart = useCallback(() => {
        refModalCart.current?.showModal();
    }, []);

    const showModalTelegram = useCallback(() => {
        refModalTelegram.current?.showModal();
    }, []);

    const showModalTelephone = useCallback(() => {
        refModalTelephone.current?.showModal();
    }, []);

    const showModalLogin = useCallback(() => {
        refModalLogin.current?.showModal();
    }, []);
    return (
        <div className={cx('container')}>
            <div className={cx('innerLeft')}>
                <img src={IcLogo} />
            </div>
            <div className={cx('innerCenter')}>
                <Marquee pauseOnHover gradient={false}>
                    <div className={cx('textContent')}>
                        <span>{Languages.header.textCenter}</span>
                        <span>{Languages.header.textCenter1}</span>
                    </div>
                </Marquee>
            </div>
            <div className={cx('innerRight')}>
                <div className={cx('innerRightItem')}>
                    <div className={cx('icons')}>
                        <Badge
                            color="secondary"
                            badgeContent={99}
                            className={cx('icon')}
                            onClick={showModalNotify}
                        >
                            <img src={IcNotification} />
                        </Badge>
                        <Badge
                            color="secondary"
                            badgeContent={99}
                            className={cx('icon')}
                            onClick={showModalCart}
                        >
                            <img src={IcCart} />
                        </Badge>
                        <Badge
                            color="secondary"
                            badgeContent={99}
                            className={cx('icon')}
                            onClick={showModalTelegram}
                        >
                            <img src={IcTelegram} />
                        </Badge>
                        <Badge
                            color="secondary"
                            badgeContent={99}
                            className={cx('icon')}
                            onClick={showModalTelephone}
                        >
                            <img src={IcTelephone} />
                        </Badge>
                    </div>
                    <div className={cx('avatarLogin')}  onClick={showModalLogin}>
                        <AvatarGroup max={1}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </AvatarGroup>
                        <div className={cx('loginText')}>
                            <h5>{userManager?.userInfo?.name}</h5>
                            <p>{userManager?.userInfo?.title}</p>
                        </div>
                    </div>   
                </div>
            </div>
            <ModalCart ref={refModalCart} />
            <ModalNotification ref={refModalNotification} />
            <ModalTelegram ref={refModalTelegram} />
            <ModalTelephone ref={refModalTelephone} />
            <ModalLogin ref={refModalLogin}/>
        </div>
    );
}

export default Header;
