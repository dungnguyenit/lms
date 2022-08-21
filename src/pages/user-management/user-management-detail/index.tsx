import IcDeleteUser from 'assets/icon/ic_delete_user.svg';
import IcUpdateUser from 'assets/icon/ic_update_user.svg';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import { MyTextInput } from 'components/input';
import { TextFieldActions } from 'components/input/types';
import { useAppStore } from 'hooks';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formValidate from 'utils/form-validate';
import styles from './user-management-detail.module.scss';

const cx = classNames.bind(styles);

const UserManagementDetail = () => {
    const { userManager } = useAppStore();
    const navigate = useNavigate();
    const refEmail = useRef<TextFieldActions>();
    const refName = useRef<TextFieldActions>();
    const refSdt = useRef<TextFieldActions>();
    const refCMT = useRef<TextFieldActions>();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [sdt, setSdt] = useState<string>('');
    const [cmt, setCMT] = useState<string>('');

    const renderViewTop = useMemo(() => {
        return (
            <div className={cx('view-top')}>
                <div className={cx('view-top-left')}>
                    <h1 className={cx('txt-management')}>{Languages.userManagement.userManagement}</h1>
                    {/* địa chỉ */}
                    <p className={cx('txt-address')}>{''}</p>
                </div>
                <div className={cx('button-right')}>
                    <Button
                        containButtonStyles={cx('btn-news-user', 'btn-news-user-green')}
                        onPress={() => console.log('New user')}
                        label={Languages.userManagementDetail.updateUser}
                        rightIcon={IcUpdateUser}
                        rightIconStyles={cx('right-icon')}
                        labelStyles={cx('llabel-btn', 'color-label-green')}
                        isLowerCase
                    />
                    <Button
                        containButtonStyles={cx('btn-news-user', 'btn-news-user-red')}
                        onPress={() => console.log('New user')}
                        rightIcon={IcDeleteUser}
                        rightIconStyles={cx('right-icon')}
                        label={Languages.userManagementDetail.deleteUser}
                        labelStyles={cx('label-btn', 'color-label-red')}
                        isLowerCase
                    />
                </div>
            </div>
        );
    }, []);

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

    const onValidate = useCallback((_email: string, _name: string) => {
        const errMsgEmail = formValidate.emailValidate(_email);
        const errMsgName = formValidate.userNameValidate(_name);
        refEmail.current?.setErrorMsg(errMsgEmail);
        refName.current?.setErrorMsg(errMsgName);
        if (`${errMsgEmail}${errMsgName}`.length === 0) {
            return true;
        }
        return false;
    }, []);

    const handleOk = useCallback(() => {
        const _email = refEmail.current?.getValue();
        const _name = refName.current?.getValue();
        const _phone = refSdt.current?.getValue();
        const _cmt = refCMT.current?.getValue();

        if (onValidate(_email, _name)) {
            setEmail(_email);
            setName(_name);
            setSdt(_phone);
            setCMT(_cmt);
        }

    }, [onValidate]);

    const handleCancel = () => {
    };

    const renderViewBodyLeft = useMemo(() => {
        return (
            <div className={cx('view-body-left')}>
                <div className={cx('view-body-left-group')}>
                    <h2 className={cx('txt-group')}>{Languages.userManagement.groupUser}</h2>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.email}</p>
                        {renderInput(refEmail, email, Languages.userManagementDetail.inputEmail, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.name}</p>
                        {renderInput(refName, name, Languages.userManagementDetail.inputName, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.sdt}</p>
                        {renderInput(refSdt, sdt, Languages.userManagementDetail.inputSdt, cx('contain-input'), 'number', 10)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.cmt}</p>
                        {renderInput(refCMT, cmt, Languages.userManagementDetail.inputCMT, cx('contain-input'), 'text', 50)}
                    </div>
                </div>
                {/* <div className={cx('view-bottom')}>
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
                </div> */}
            </div>
        );
    }, [cmt, email, name, renderInput, sdt]);

    return (
        <div className={cx('container')}>
            {renderViewTop}
            <div className={cx('view-body')}>
                {renderViewBodyLeft}
            </div>
        </div>
    );
};

export default UserManagementDetail;
