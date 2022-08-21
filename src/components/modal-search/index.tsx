import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react';
import { ModalSearchActions, ModalSearchProps } from './types';
import Languages from 'commons/languages';
import styles from './modal-search.module.scss';
import classNames from 'classnames/bind';
import { MyTextInput } from 'components/input';
import { Button } from 'components/button';
import Modal from '@mui/material/Modal';
import { TextFieldActions } from 'components/input/types';
import formValidate from 'utils/form-validate';

const cx = classNames.bind(styles);

const ModalSearch = forwardRef<ModalSearchActions, ModalSearchProps>(({ description, onSuccessPress }: ModalSearchProps, ref) => {

    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [sdt, setSdt] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const refEmail = useRef<TextFieldActions>();
    const refName = useRef<TextFieldActions>();
    const refSdt = useRef<TextFieldActions>();
    const refPosition = useRef<TextFieldActions>();

    const hideModal = () => {
        setVisible(false);
    };

    const showModal = () => {
        setVisible(true);
    };

    useImperativeHandle(ref, () => ({
        showModal,
        hideModal,
        setValue
    }));


    const setValue = useCallback((txt: string) => {
        switch (txt) {
            case 'email':
                return setEmail('');
            case 'name':
                return setName('');
            case 'phone':
                return setSdt('');
            case 'position':
                return setPosition('');
            default:
                return;
        }
    }, []);

    const onValidate = useCallback((_name) => {
        const errMsgName = formValidate.userNameSearchValidate(_name);
        refName.current?.setErrorMsg(errMsgName);
        if (`${errMsgName}`.length === 0) {
            return true;
        }
        return false;
    }, []);

    const handleOk = useCallback(() => {
        const _email = refEmail.current?.getValue();
        const _name = refName.current?.getValue();
        const _phone = refSdt.current?.getValue();
        const _position = refPosition.current?.getValue();

        if (onValidate(_name)) {
            onSuccessPress?.(_email, _name, _phone, _position);
            setVisible(false);
            setEmail(_email);
            setName(_name);
            setSdt(_phone);
            setPosition(_position);
        }

    }, [onSuccessPress, onValidate]);

    const handleCancel = () => {
        setVisible(false);
    };

    const renderInput = useCallback((refInput: any, value: string, placeHolder: string, inputStyle: string, type: any, maxLength: number) => {
        return (
            <MyTextInput
                ref={refInput}
                type={type}
                inputStyle={inputStyle}
                placeHolder={placeHolder}
                value={value}
                maxLength={maxLength}
            />
        );
    }, []);

    return (
        <Modal
            open={visible}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={handleCancel}
        >
            <>
                <div className={cx('container')}>
                    <div className={cx('group-input')}>
                        <h1>{description}</h1>
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagement.modal.email}</p>
                        {renderInput(refEmail, email, Languages.userManagement.modal.inputEmail, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagement.modal.name}</p>
                        {renderInput(refName, name, Languages.userManagement.modal.inputName, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagement.modal.sdt}</p>
                        {renderInput(refSdt, sdt, Languages.userManagement.modal.inputSdt, cx('contain-input'), 'number', 10)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagement.modal.position}</p>
                        {renderInput(refPosition, position, Languages.userManagement.modal.inputPosition, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('view-bottom')}>
                        <Button
                            label={Languages.common.continue}
                            isLowerCase
                            containButtonStyles={cx('button-continue')}
                            labelStyles={cx('label-continue')}
                            onPress={handleOk}
                        />
                        <Button
                            label={Languages.common.cancel}
                            isLowerCase
                            containButtonStyles={cx('button-cancel')}
                            labelStyles={cx('label-cancel')}
                            onPress={handleCancel}
                        />
                    </div>
                </div>
            </>
        </Modal>
    );
});

export default ModalSearch;
