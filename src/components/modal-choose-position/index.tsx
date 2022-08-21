import Modal from '@mui/material/Modal';
import IcRight from 'assets/icon/ic_right.svg';
import classNames from 'classnames/bind';
import { Button } from 'components/button';
import { dataPosition } from 'pages/__mocks__/TestApiProductUnivest';
import { useAppStore } from 'hooks';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import styles from './modal-choose-position.module.scss';
import { ModalChoosePositionActions, ModalChoosePositionProps } from './types';

const cx = classNames.bind(styles);

export interface Arr {
    key: string;
    isShow: boolean;
}

const ModalChoosePosition = forwardRef<ModalChoosePositionActions, ModalChoosePositionProps>(({ description, onConfirm }: ModalChoosePositionProps, ref) => {

    const [visible, setVisible] = useState(false);
    const [showArr, setShowArr] = useState<Arr[]>([]);
    const [toggle, setToggle] = useState<boolean>(false);
    const [data, setData] = useState(dataPosition);
    const { common } = useAppStore();

    const hideModal = () => {
        setVisible(false);
    };

    const showModal = useCallback(() => {
        setVisible(true);
    }, []);

    useImperativeHandle(ref, () => ({
        showModal,
        hideModal
    }));

    const handleCancel = () => {
        setVisible(false);
    };

    const haveItem = useCallback((obj) => {
        const _showArr = showArr;
        for (let i = 0; i < _showArr?.length; i++) {
            if (obj?.key === _showArr[i].key) {
                if (_showArr[i].isShow === true) {
                    _showArr[i].isShow = false;
                } else {
                    _showArr[i].isShow = true;
                }
                setShowArr(_showArr);
                return false;
            }
        }
        return true;
    }, [showArr]);

    const onShowChild = useCallback((obj) => {

        const _showArr = showArr;

        if (_showArr.length === 0) {
            _showArr.push({ key: obj?.key, isShow: true });
            setShowArr(_showArr);
        } else {
            if (haveItem(obj)) {
                _showArr.push({ key: obj?.key, isShow: true });
                setShowArr(_showArr);
            }
        }
        setToggle(last => !last);

    }, [haveItem, showArr, toggle]);

    const renderChild = useCallback((itemChild, indexChild) => {
        return (
            <>
                <Button
                    label={itemChild?.label}
                    key={indexChild}
                    containButtonStyles={cx('container-button-child')}
                    labelStyles={cx('label-btn')}
                    isLowerCase
                    rightIcon={itemChild?.children?.length > 0 ? IcRight : null}
                    onPress={itemChild?.children?.length > 0 ? () => onShowChild(itemChild) : () => onChoose(itemChild)}
                />
                {renderGroupChildLevelTwo(itemChild)}
            </>
        );
    }, [toggle]);

    const renderChildLevelTwo = useCallback((itemChild, indexChild) => {
        console.log(itemChild, indexChild);
        return (
            <>
                <Button
                    label={itemChild?.label}
                    key={indexChild}
                    containButtonStyles={cx('container-button-child-level-two')}
                    labelStyles={cx('label-btn')}
                    isLowerCase
                    rightIcon={itemChild?.children?.length > 0 ? IcRight : null}
                    onPress={itemChild?.children?.length > 0 ? () => onShowChild(itemChild) : () => onChoose(itemChild)}
                />
            </>
        );
    }, [toggle, showArr]);


    const renderGroupChildLevelTwo = useCallback((itemChild) => {
        return (
            <>
                {showArr.map((obj) => {
                    {
                        return (
                            <>
                                {
                                    obj.isShow && itemChild?.key === obj.key && itemChild?.children?.map((itemChildLeverTow, indexChild) => {
                                        return (
                                            <>
                                                {renderChildLevelTwo(itemChildLeverTow, indexChild)}
                                            </>
                                        );
                                    })
                                }
                            </>
                        );
                    }
                })}
            </>
        );
    }, [renderChildLevelTwo, showArr]);

    const renderGroupChild = useCallback((item) => {
        return (
            <>
                {showArr.map((obj) => {
                    {
                        return (
                            <>
                                {
                                    obj.isShow && item?.key === obj.key && item?.children?.map((itemChild, indexChild) => {
                                        return (
                                            <>
                                                {renderChild(itemChild, indexChild)}
                                            </>
                                        );
                                    })
                                }
                            </>
                        );
                    }
                })}
            </>
        );
    }, [toggle, showArr]);

    const onChoose = useCallback((item) => {
        onConfirm?.(item, common.isEdit);
        setVisible(false);
    }, [onConfirm, toggle]);

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
                    <div className={cx('group-button')}>
                        {data?.map((item, index) => {
                            return (
                                <>
                                    <Button
                                        label={item?.label}
                                        key={index}
                                        containButtonStyles={cx('container-button')}
                                        labelStyles={cx('label-btn')}
                                        isLowerCase
                                        rightIcon={item?.children?.length > 0 ? IcRight : null}
                                        onPress={item?.children?.length > 0 ? () => onShowChild(item) : () => onChoose(item)}
                                    />
                                    {renderGroupChild(item)}
                                </>
                            );
                        })}
                    </div>
                </div>
            </>
        </Modal>
    );
});

export default ModalChoosePosition;
