import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import React, {
    forwardRef,
    useCallback,
    useImperativeHandle, useState
} from 'react';
import styles from './cart.module.scss';
import { ModalCartActions, ModalCartProps } from './types';

const cx = classNames.bind(styles);
const ModalCart = forwardRef<ModalCartActions, ModalCartProps>(
    ({ description, onSuccessPress }: ModalCartProps, ref) => {
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

        const onOk = useCallback(() => {
            
            onSuccessPress?.();
            setVisible(false);
        }, []);

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
                            <div className={cx('group-input')}>
                                <h1>{description}</h1>
                            </div>
                            <div className={cx('view-bottom')}>
                                <Button
                                    label={Languages.common.continue}
                                    isLowerCase
                                    containButtonStyles={cx('button-continue')}
                                    labelStyles={cx('label-continue')}
                                    onPress={onOk}
                                />
                                <Button
                                    label={Languages.common.cancel}
                                    isLowerCase
                                    containButtonStyles={cx('button-cancel')}
                                    labelStyles={cx('label-cancel')}
                                    onPress={onCancel}
                                />
                            </div>
                        </div>
                    </>
                </Modal>
            </>
        );
    }
);

export default ModalCart;
