import Modal from '@mui/material/Modal';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import { MyTextInput } from 'components/input';
import { TextFieldActions } from 'components/input/types';
import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useRef,
    useState
} from 'react';
import styles from './telephone.module.scss';
import { ModalTelephoneActions, ModalTelephoneProps } from './types';
import { telephone } from 'pages/__mocks__/TestApiProductUnivest';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const cx = classNames.bind(styles);

const ModalTelephone = forwardRef<ModalTelephoneActions, ModalTelephoneProps>(
    ({ description, onSuccessPress }: ModalTelephoneProps, ref) => {
        const [visible, setVisible] = useState(false);
        const refInput = useRef<TextFieldActions>(null);

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
            // const _email = refEmail.current?.getValue();
            // const _name = refName.current?.getValue();
            // const _phone = refSdt.current?.getValue();
            // const _position = refPosition.current?.getValue();
            onSuccessPress?.();
            setVisible(false);
        }, []);

        const onCancel = () => {
            setVisible(false);
        };

        const renderInput = useCallback(
            (
                refs: any,
                value: string,
                placeHolder: string,
                inputStyle: string,
                type: any,
                maxLength: number
            ) => {
                return (
                    <MyTextInput
                        ref={refs}
                        type={type}
                        inputStyle={cx(inputStyle)}
                        placeHolder={placeHolder}
                        value={value}
                        maxLength={maxLength}
                    />
                );
            },
            []
        );
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
                                {renderInput(
                                    refInput,
                                    '',
                                    'Nhập số điện thoại',
                                    'inputItem',
                                    'number',
                                    10
                                )}
                            </div>
                            <div className={cx('group-form')}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        {telephone?.map((items) => {
                                            return (
                                                <>
                                                    <Grid item xs={4} md={4}>
                                                        <div className={cx('form-item')}>
                                                            <h5>{items.title}</h5>
                                                        </div>
                                                    </Grid>
                                                </>
                                            );
                                        })}
                                    </Grid>
                                </Box>
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

export default ModalTelephone;
