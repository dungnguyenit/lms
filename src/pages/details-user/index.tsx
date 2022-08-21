import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import IcAddPermissions from 'assets/icon/ic_add_permissions.svg';
import IcSave from 'assets/icon/ic_save.svg';
import IcClose from 'assets/icon/ic_close.svg';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import DropDownTop from 'components/dropdown-top';
import { MyTextInput } from 'components/input';
import { TextFieldActions } from 'components/input/types';
import { useAppStore } from 'hooks';
import { dataCheckBox, dataCN, transaction } from 'pages/__mocks__/TestApiProductUnivest';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formValidate from 'utils/form-validate';
import styles from './details-user.module.scss';
import { FormControlLabel } from '@mui/material';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const DetailsUser = () => {
    const { userManager } = useAppStore();
    const navigate = useNavigate();
    const [data, setData] = useState(dataCheckBox);
    const [obj, setObj] = useState(dataCN);
    const refEmail = useRef<TextFieldActions>();
    const refName = useRef<TextFieldActions>();
    const refSdt = useRef<TextFieldActions>();
    const refCMT = useRef<TextFieldActions>();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [sdt, setSdt] = useState<string>('');
    const [cmt, setCMT] = useState<string>('');
    const [isRender, setIsRender] = useState(false);


    const renderViewTop = useMemo(() => {
        return (
            <div className={cx('view-top')}>
                <div className={cx('view-top-left')}>
                    <h1 className={cx('txt-management')}>{Languages.formUser.creacteUser}</h1>
                    {/* địa chỉ */}
                    <p className={cx('txt-address')}>{''}</p>
                </div>
                <div className={cx('button-right')}>
                    <Button
                        containButtonStyles={cx('btn-news-user')}
                        onPress={() => console.log('New user')}
                        label={Languages.formUser.save}
                        rightIcon={IcSave}
                        rightIconStyles={cx('right-icon')}
                        labelStyles={cx('label-btn')}
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

    const onSave = useCallback(() => {
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

    const renderViewBodyLeft = useMemo(() => {
        return (
            <div className={cx('view-body-left')}>
                <div className={cx('view-body-left-group')}>
                    <h2 className={cx('txt-group')}>{Languages.formUser.personalInformation}</h2>
                    <div className={cx('group-input')}>
                        <p>{Languages.common.email}<span className={cx('colorStar')}>{Languages.userManagementDetail.star}</span></p>
                        {renderInput(refEmail, email, Languages.common.inputEmail, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.name}<span className={cx('colorStar')}>{Languages.userManagementDetail.star}</span></p>
                        {renderInput(refName, name, Languages.common.inputName, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.sdt}<span className={cx('colorStar')}>{Languages.userManagementDetail.star}</span></p>
                        {renderInput(refSdt, sdt, Languages.common.inputSdt, cx('contain-input'), 'number', 10)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.userManagementDetail.cmt}<span className={cx('colorStar')}>{Languages.userManagementDetail.star}</span></p>
                        {renderInput(refCMT, cmt, Languages.common.inputCMT, cx('contain-input'), 'text', 50)}
                    </div>
                    <div className={cx('group-input')}>
                        <p>{Languages.common.position}<span className={cx('colorStar')}>{Languages.userManagementDetail.star}</span></p>
                        <DropDownTop />
                        {/* <Button /> */}
                    </div>
                </div>
            </div>
        );
    }, [cmt, email, name, renderInput, sdt]);

    const renderCheckBox = useCallback((_data: any) => {

        return (
            <>
                {_data.children?.map((item, index) => {
                    return (
                        <>
                            <Grid item xs={2.4} md={4} lg={2.4} >
                                <div className={cx('check-box')} key={index}>
                                    <Checkbox {...label}
                                        disabled={item?.type === '1'}
                                        defaultChecked={item?.type === '1'}
                                        color='success'
                                    />
                                    <p>{item?.title}</p>
                                </div>
                            </Grid>
                        </>
                    );
                })}
            </>
        );

    }, []);

    const haveItem = useCallback(() => {
        for (let i = 0; i < dataCheckBox.length; i++) {
            if (dataCheckBox[i].id === dataCN?.id) return false;
        }
        return true;
    }, []);

    const onAdd = useCallback(() => {
        if (haveItem()) {
            dataCheckBox.push(dataCN);
        }
        setData(dataCheckBox);
        setIsRender(last => !last);
    }, [haveItem]);

    const renderGroupCheckBox = useMemo(() => {

        return (
            <div className={cx('container-group-checkbox')}>
                {data?.map((item, index) => {

                    const deleteItem = () => {
                        const _data = data.filter(items => items?.id !== item?.id);
                        setData(_data);
                        setIsRender(last => !last);
                    };

                    return (
                        <div className={cx('view-item-child')} key={index}>
                            <div className={cx('label-group')}>
                                <h1>{item?.label}</h1>
                                {item?.type &&
                                    <div className={cx('bg-img-close')}>
                                        <img
                                            src={IcClose}
                                            className={cx('img-close')}
                                            onClick={deleteItem}
                                        />
                                    </div>
                                }
                            </div>
                            <div className={cx('group-checkbox')} >
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        {renderCheckBox(item)}
                                    </Grid>
                                </Box>
                            </div>
                        </div >
                    );
                })}
                <div className={cx('btn-add')}>
                    <Button
                        label={Languages.formUser.addPermissions}
                        isLowerCase
                        containButtonStyles={cx('container-btn-add-permissions')}
                        labelStyles={cx('label-btn-add')}
                        rightIcon={IcAddPermissions}
                        onPress={onAdd}
                    />
                </div>
            </div>
        );
    }, [data, onAdd, renderCheckBox, isRender]);

    const renderViewItem = useMemo(() => {
        return (
            <div className={cx('view-item')}>
                {renderGroupCheckBox}
            </div>
        );
    }, [renderGroupCheckBox]);

    const renderTransaction = useMemo(() => {
        return (
            <Box className={cx('box-group')}>
                <h2>{Languages.formUser.transaction}</h2>
                <Box className={cx('check-item')}>
                    {transaction?.map((item) => {
                        return (
                            <>
                                <FormControlLabel
                                    control={<Checkbox color="success" />}
                                    label={item.title}
                                    className={cx('item')}
                                />
                            </>
                        );
                    })}

                </Box>
            </Box>
        );
    }, []);

    return (
        <div className={cx('container')}>
            {renderViewTop}
            <div className={cx('view-body')}>
                {renderViewBodyLeft}
                <Box className={cx('list-checkbox')}>
                    {renderTransaction}
                </Box>
                <div className={cx('view-body-right')}>
                    <h2 className={cx('txt-group')}>{Languages.formUser.authorizationInformation}</h2>
                    {renderViewItem}
                </div>
            </div>
        </div>
    );
};

export default DetailsUser;
