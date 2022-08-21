import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import IcAddPermissions from 'assets/icon/ic_add_permissions.svg';
import IcClose from 'assets/icon/ic_close.svg';
import IcRight from 'assets/icon/ic_right.svg';
import IcSave from 'assets/icon/ic_save.svg';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import { MyTextInput } from 'components/input';
import { TextFieldActions } from 'components/input/types';
import ModalChoosePosition from 'components/modal-choose-position';
import { ModalChoosePositionActions } from 'components/modal-choose-position/types';
import ModalDelete from 'components/modal-delete';
import { ModalDeleteActions } from 'components/modal-delete/types';
import { useAppStore } from 'hooks';
import {
    dataCheckBox,
    dataCN,
    transaction
} from 'pages/__mocks__/TestApiProductUnivest';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formValidate from 'utils/form-validate';
import styles from './create-user.module.scss';

const cx = classNames.bind(styles);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CreateUser = () => {
    const { common } = useAppStore();
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
    const [position, setPosition] = useState<any>([]);
    const [showTransaction, setShowTransaction] = useState<boolean>(false);
    const [keyMenu, setKeyMenu] = useState<string>('');
    const [itemChoose, setItemChoose] = useState<any>({});
    const [showButtonAdd, setShowButtonAdd] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [choose, setChoose] = useState<number>();
    const [labelBtn, setLabelBtn] = useState<string>(
        Languages.common.inputPosition
    );
    const refModalDelete = useRef<ModalDeleteActions>(null);
    const refModaChoose = useRef<ModalChoosePositionActions>(null);
    const [toggle, setToggle] = useState<boolean>(false);

    const renderViewTop = useMemo(() => {
        return (
            <div className={cx('view-top')}>
                <div className={cx('view-top-left')}>
                    <h1 className={cx('txt-management')}>
                        {Languages.formUser.creacteUser}
                    </h1>
                    {/* địa chỉ */}
                    <p className={cx('txt-address')}>{''}</p>
                </div>
                <div className={cx('button-right')}>
                    <Button
                        containButtonStyles={cx('btn-news-user')}
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

    const renderInput = useCallback(
        (
            refInput: any,
            value: string,
            placeHolder: string,
            inputStyle: string,
            type: any,
            maxLength: number
        ) => {
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
        },
        []
    );

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

    const haveItemPosition = useCallback(
        (objPosition) => {
            const _position = position;
            for (let i = 0; i < _position?.length; i++) {
                if (objPosition?.label === _position[i].label) {
                    return false;
                }
            }
            return true;
        },
        [position]
    );

    const onChoosePosition = useCallback(
        (status: boolean) => {
            common.setIsEdit(status);
            refModaChoose.current?.showModal();
        },
        [common]
    );

    const onChoose = useCallback(
        (dataChoose: any, title: any) => {
            let _position;
            if (title) {
                _position = position.slice(0, position.length - 1);
            } else {
                _position = position;
            }
            setToggle((last) => !last);
            if (_position.length === 0) {
                _position.push(dataChoose);
                setLabelBtn(Languages.common.inputPosition);
                setPosition(_position);
            } else {
                if (haveItemPosition(dataChoose)) {
                    setShowButtonAdd(false);
                    setLabelBtn(Languages.common.inputPosition);
                    _position.push(dataChoose);
                    setPosition(_position);
                }
            }
            setIsEdit(false);

            if (dataChoose.key === '1' || dataChoose.key === '2') {
                setShowTransaction(true);
                setKeyMenu(dataChoose.key);
            } else {
                setShowTransaction(false);
            }
        },
        [haveItemPosition, isEdit, position, toggle]
    );

    const deleteItemPosition = useCallback((item) => {
        setItemChoose(item);
        refModalDelete.current?.showModal();
    }, []);

    const onConfirmDelete = useCallback(() => {
        const _position = position.filter(
            (items) => items?.label !== itemChoose?.label
        );
        setPosition(_position);
        setToggle((last) => !last);
    }, [itemChoose?.label, position]);

    const renderChoosePosition = useCallback(
        (item, index) => {
            return (
                <>
                    {showButtonAdd || index < position.length - 1 ? (
                        <div className={cx('group-close')}>
                            <Button
                                label={item.label}
                                containButtonStyles={cx('contain-btn')}
                                labelStyles={cx('label-btn-position')}
                                isLowerCase
                                key={index}
                                rightIcon={IcRight}
                                onPress={() => console.log('abc')}
                            />
                            <div className={cx('bg-img-close-position')}>
                                <img
                                    src={IcClose}
                                    className={cx('img-close')}
                                    onClick={() => deleteItemPosition(item)}
                                />
                            </div>
                        </div>
                    ) : (
                        <Button
                            label={item.label}
                            containButtonStyles={cx('contain-btn')}
                            labelStyles={cx('label-btn-position')}
                            isLowerCase
                            key={index}
                            rightIcon={IcRight}
                            onPress={() => onChoosePosition(true)}
                        />
                    )}
                </>
            );
        },
        [deleteItemPosition, onChoosePosition, position.length, showButtonAdd]
    );

    const renderViewBodyLeft = useMemo(() => {
        const onAddPosition = () => {
            setLabelBtn(Languages.common.inputPosition);
            setShowButtonAdd(true);
        };

        return (
            <div className={cx('view-body-left')}>
                <div className={cx('view-body-left-group')}>
                    <h2 className={cx('txt-group')}>
                        {Languages.formUser.personalInformation}
                    </h2>
                    <div className={cx('group-input')}>
                        <p>
                            {Languages.common.email}
                            <span className={cx('color-star')}>
                                {Languages.userManagementDetail.star}
                            </span>
                        </p>
                        {renderInput(
                            refEmail,
                            email,
                            Languages.common.inputEmail,
                            cx('contain-input'),
                            'text',
                            50
                        )}
                    </div>
                    <div className={cx('group-input')}>
                        <p>
                            {Languages.userManagementDetail.name}
                            <span className={cx('color-star')}>
                                {Languages.userManagementDetail.star}
                            </span>
                        </p>
                        {renderInput(
                            refName,
                            name,
                            Languages.common.inputName,
                            cx('contain-input'),
                            'text',
                            50
                        )}
                    </div>
                    <div className={cx('group-input')}>
                        <p>
                            {Languages.userManagementDetail.sdt}
                            <span className={cx('color-star')}>
                                {Languages.userManagementDetail.star}
                            </span>
                        </p>
                        {renderInput(
                            refSdt,
                            sdt,
                            Languages.common.inputSdt,
                            cx('contain-input'),
                            'number',
                            10
                        )}
                    </div>
                    <div className={cx('group-input')}>
                        <p>
                            {Languages.userManagementDetail.cmt}
                            <span className={cx('color-star')}>
                                {Languages.userManagementDetail.star}
                            </span>
                        </p>
                        {renderInput(
                            refCMT,
                            cmt,
                            Languages.common.inputCMT,
                            cx('contain-input'),
                            'text',
                            50
                        )}
                    </div>
                    <div className={cx('group-input')}>
                        <p>
                            {Languages.common.position}
                            <span className={cx('color-star')}>
                                {Languages.userManagementDetail.star}
                            </span>
                        </p>
                        {position?.length > 0 &&
              position?.map((item, index) => renderChoosePosition(item, index))}

                        {(position.length === 0 ||
              (showButtonAdd &&
                labelBtn === Languages.common.inputPosition)) && (
                            <Button
                                label={labelBtn}
                                containButtonStyles={cx('contain-btn')}
                                labelStyles={cx('label-btn-position')}
                                isLowerCase
                                rightIcon={IcRight}
                                onPress={() => onChoosePosition(false)}
                            />
                        )}
                    </div>
                    <div className={cx('btn-add')}>
                        <Button
                            containButtonStyles={cx('btn-add-position')}
                            rightIcon={IcAddPermissions}
                            onPress={onAddPosition}
                            isLowerCase
                            disabled={labelBtn !== Languages.common.inputPosition}
                            label={Languages.formUser.addPosition}
                            labelStyles={cx('label-inputPosition')}
                        />
                    </div>
                </div>
            </div>
        );
    }, [
        cmt,
        email,
        labelBtn,
        name,
        onChoosePosition,
        position,
        renderInput,
        sdt,
        showButtonAdd,
        toggle,
        common.isEdit
    ]);

    const renderCheckBox = useCallback((_data: any) => {
        return (
            <>
                {_data.children?.map((item, index) => {
                    return (
                        <>
                            <Grid item xs={2.4} md={4} lg={2.4}>
                                <div className={cx('check-box')} key={index}>
                                    <Checkbox
                                        {...label}
                                        disabled={item?.type === '1'}
                                        defaultChecked={item?.type === '1'}
                                        color="success"
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
            if (dataCheckBox[i].id === obj?.id) return false;
        }
        return true;
    }, [obj?.id]);

    const onAdd = useCallback(() => {
        if (haveItem()) {
            dataCheckBox.push(obj);
        }
        setData(dataCheckBox);
        setToggle((last) => !last);
    }, [haveItem, obj]);

    const renderGroupCheckBox = useMemo(() => {
        return (
            <div className={cx('container-group-checkbox')}>
                {data?.map((item, index) => {
                    const deleteItem = () => {
                        const _data = data.filter((items) => items?.id !== item?.id);
                        setData(_data);
                        setToggle((last) => !last);
                    };

                    return (
                        <div className={cx('view-item-child')} key={index}>
                            <div className={cx('label-group')}>
                                <h1 className={cx('item-label')}>{item?.label}</h1>
                                {item?.type && (
                                    <div className={cx('bg-img-close')}>
                                        <img
                                            src={IcClose}
                                            className={cx('img-close')}
                                            onClick={deleteItem}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className={cx('group-checkbox')}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        {renderCheckBox(item)}
                                    </Grid>
                                </Box>
                            </div>
                        </div>
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
    }, [data, onAdd, renderCheckBox, toggle]);

    const renderViewItem = useMemo(() => {
        return <div className={cx('view-item')}>{renderGroupCheckBox}</div>;
    }, [renderGroupCheckBox]);

    const renderTransaction = useMemo(() => {
        return (
            <Box className={cx('box-group')}>
                <h2>{Languages.formUser.transaction}</h2>
                <Box className={cx('check-item')}>
                    {keyMenu === '1' ? (
                        <>
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
                        </>
                    ) : (
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {transaction?.map((item, index) => {
                                    const onClickRadio = () => {
                                        setChoose(item?.id);
                                    };

                                    return (
                                        <div
                                            key={index}
                                            className={
                                                choose === item.id
                                                    ? cx('form-control', 'bg-form')
                                                    : cx('form-control')
                                            }
                                            onClick={onClickRadio}
                                        >
                                            <FormControlLabel
                                                value={item.id}
                                                control={<Radio color="success" />}
                                                label={item.title}
                                                className={cx('form-control-radio')}
                                            />
                                        </div>
                                    );
                                })}
                            </RadioGroup>
                        </FormControl>
                    )}
                </Box>
            </Box>
        );
    }, [keyMenu, choose]);

    return (
        <div className={cx('container')}>
            {renderViewTop}
            <div className={cx('view-body')}>
                {renderViewBodyLeft}
                {showTransaction && (
                    <Box className={cx('list-checkbox')}>{renderTransaction}</Box>
                )}
                <div className={cx('view-body-right')}>
                    <h2 className={cx('txt-author')}>
                        {Languages.formUser.authorizationInformation}
                    </h2>
                    {renderViewItem}
                </div>
            </div>

            <ModalChoosePosition
                ref={refModaChoose}
                description={Languages.formUser.listPosition}
                onConfirm={onChoose}
            />
            <ModalDelete
                ref={refModalDelete}
                description={Languages.formUser.deletePosition}
                content={Languages.formUser.contentDeletePosition}
                onConfirm={onConfirmDelete}
            />
        </div>
    );
};

export default CreateUser;
