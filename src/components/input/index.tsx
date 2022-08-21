import classNames from 'classnames/bind';
import React, {
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState
} from 'react';
import Validate from 'utils/validate';
import styles from './input.module.scss';
import { TextFieldActions, TextFieldProps } from './types';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/display-name
export const MyTextInput = forwardRef<TextFieldActions, TextFieldProps>(
    (
        {
            label,
            value,
            placeHolder,
            onChangeText,
            type,
            maxLength,
            disabled = true,
            containerInput,
            inputStyle,
            styleDisable,
            styleGroup,
            onKeyPress,
            rightIcon,
            isIcon = false,
            onClickRightIcon
        }: TextFieldProps,
        ref?: any
    ) => {
        useImperativeHandle(ref, () => ({
            setValue,
            fillValue,
            getValue,
            focus,
            blur,
            setErrorMsg
        }));

        const [textfieldVal, setTextfieldVal] = useState<any>(`${value}`);
        const [errMsg, setErrMsg] = useState<string>('');
        const [isFocus, setIsFocus] = useState<boolean>(false);

        const orgTextInput = useRef<HTMLInputElement>(null);

        const _onChangeText = useCallback((e) => {
            setTextfieldVal?.(e.target.value);
        }, []);

        const getValue = useCallback(() => {
            return textfieldVal.trim();
        }, [textfieldVal]);

        const setValue = useCallback(
            (text: any) => {
                if (text) {
                    setTextfieldVal?.(text);
                }
                setErrMsg('');
            },
            []
        );

        const fillValue = useCallback(
            (text: any) => {
                setValue(text);
            },
            [setValue]
        );

        useEffect(() => {
            if (!Validate.isEmpty(value)) {
                setValue(value);
            }
        }, [setValue, value]);

        useEffect(() => {
            if (Validate.isEmpty(value)) {
                setIsFocus(false);
            }
        }, [setValue, value]);

        const focus = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.focus();
            }
            setIsFocus(true);
        }, []);

        const blur = useCallback(() => {
            if (orgTextInput.current) {
                orgTextInput.current?.blur();
            }
        }, []);

        const setErrorMsg = useCallback((msg: string) => {
            if (Validate.isStringEmpty(msg)) {
                return;
            }
            setIsFocus(false);
            setErrMsg(msg);
        }, []);

        const errorMessage = useMemo(() => {
            if (!Validate.isStringEmpty(errMsg)) {
                return <div className={cx('messageError')}>
                    <p>{errMsg}</p>
                </div>;
            }
            return null;
        }, [errMsg]);

        const containerStyle = useMemo(() => {
            let style = ' ';

            if (containerInput) {
                style += containerInput + ' ';
            }

            if (errMsg !== '') {
                style += styles.errorMsg;
            }

            return style;

        }, [containerInput, errMsg]);

        const handleClick = useCallback(() => {
            onClickRightIcon?.('title');
        }, [onClickRightIcon]);

        return (
            <div className={cx(`${styles.boxGroupInput} ${styleGroup}`)}>
                {label ? <label className={cx(styles.label)}>{label}</label> : ''}
                <div className={cx(`${styles.formGroup}${containerStyle}`)}>
                    <input
                        ref={orgTextInput}
                        type={type}
                        onChange={_onChangeText}
                        placeholder={placeHolder}
                        value={textfieldVal}
                        maxLength={maxLength}
                        disabled={!disabled}
                        readOnly={!disabled}
                        autoCapitalize="none"
                        onFocus={focus}
                        onKeyUp={onKeyPress}
                        className={cx(`${inputStyle ? inputStyle : ''} ${!disabled ? styleDisable : ''}`)}
                    />
                    {/* {
                        errMsg && <div className={styles.ic_error}><img src={IcError} alt="ic_error" /></div>
                    }
                    {
                        isIcon ? isFocus && <div className={styles.ic_error}><img src={IcSuccess} alt="ic_success" /></div> : ''
                    } */}
                    {rightIcon && <img src={rightIcon} className={cx('icon-right')} onClick={handleClick} />}
                </div>
                {errorMessage}
            </div>
        );
    }
);
