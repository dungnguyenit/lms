import { Avatar, AvatarGroup } from '@mui/material';
import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import { useAppStore } from 'hooks';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import styles from './modal-login.module.scss';
import { ModalLoginActions, ModalLoginProps } from './types';
import IcPeople from 'assets/icon/ic_people.svg';
import IcSetting from 'assets/icon/ic_setting.svg';
import IcOut from 'assets/icon/ic_out.svg';
import Languages from 'commons/languages';

const cx = classNames.bind(styles);
const ModalLogin = forwardRef<ModalLoginActions, ModalLoginProps>(
    ({ description, onSuccessPress }: ModalLoginProps, ref) => {
        const [visible, setVisible] = useState(false);

        const hideModal = () => {
            setVisible(false);
        };

        const showModal = () => {
            setVisible(true);
        };

        useImperativeHandle(ref, () => ({
            showModal,
            hideModal
        }));

        const handleCancel = () => {
            setVisible(false);
        };

        const { userManager } = useAppStore();

        return (
            <>
                <Modal
                    open={visible}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    onClose={handleCancel}
                >
                    <>
                        <div className={cx('container')}>
                            <div className={cx('group-input')}>
                                <div className={cx('form-item')}>
                                    <AvatarGroup max={1}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"
                                        />
                                    </AvatarGroup>
                                    <div className={cx('loginText')}>
                                        <h5>{userManager?.userInfo?.name}</h5>
                                        <p>{userManager?.userInfo?.title}</p>
                                    </div>
                                </div>
                                <div className={cx('form-content')}>
                                    <div className={cx('form-item')}>
                                        <img src={IcPeople} alt="" />
                                        <p>{Languages.header.personalInformation}</p>
                                    </div>
                                    <div className={cx('form-item')}>
                                        <img src={IcSetting} alt="" />
                                        <p>{Languages.header.setting}</p>
                                    </div>
                                </div>
                                <div className={cx('form-content')}>
                                    <div className={cx('form-item')}>
                                        <img src={IcOut} alt="" />
                                        <p>{Languages.header.logout}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </Modal>
            </>
        );
    }
);

export default ModalLogin;
