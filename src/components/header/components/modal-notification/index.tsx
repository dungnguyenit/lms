import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import React, {
    forwardRef, useImperativeHandle, useState
} from 'react';
import styles from './notification.module.scss';
import { ModalNotificationActions, ModalNotificationProps } from './types';
import { notification } from 'pages/__mocks__/TestApiProductUnivest';

const cx = classNames.bind(styles);

const ModalNotification = forwardRef<ModalNotificationActions,ModalNotificationProps>(({ description }: ModalNotificationProps, ref) => {
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

    const onCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Modal
                open={visible}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClose={onCancel}
            >
                <>
                    <div className={cx('container')}>
                        {notification?.map((item) => {
                            return (
                                <>
                                    <div className={cx('group-form')}>
                                        <div className={cx('form-group-top')}>
                                            <h5>{item.title}</h5>
                                            <span>{item.times}</span>
                                        </div>
                                        <div className={cx('form-group-buttons')}>
                                            <p>{item.name}</p>
                                        </div>
                                    </div> 
                                </>
                            );
                        })}
                        <div className={cx('footer')}>Xem tất cả thông báo</div>
                    </div>
                </>
            </Modal>
        </>
    );
});

export default ModalNotification;
