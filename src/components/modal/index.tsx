import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal } from 'antd';
import { PopupActions, PopupProps } from './types';
import Languages from 'commons/languages';

// eslint-disable-next-line react/display-name
const Popup = forwardRef<PopupActions, PopupProps>(({ title, description, onSuccessPress }: PopupProps, ref) => {

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

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

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
        onSuccessPress?.();
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Modal
            title={title}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            cancelText={Languages.common.cancel}
            okText={Languages.common.continue}
            focusTriggerAfterClose={true}
            maskClosable={true}
            centered={false}
            closable={true}
        >
            <p>{description}</p>
        </Modal>
    );
});

export default Popup;
