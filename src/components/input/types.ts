

export type TextFieldProps = {
    capitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined,
    type: 'radio' | 'email' | 'phone' | 'text' | 'number' | 'password',
    label?: string;
    value?: string | number;
    placeHolder?: string;
    isPassword?: boolean;
    rightIcon?: string;
    disabled?: boolean;
    hasUnderline?: boolean;
    multiline?: boolean;
    maxLength?: number;
    formatPrice?: boolean;
    formatNumber?: boolean;
    formatEmail?: boolean;
    verified?: boolean;
    showRestriction?: boolean;
    priceSuffix?: string;
    backgroundColor?: any;
    leftIcon?: string;
    iconSize?: number;
    inputStyle?: any;
    styleDisable?: any;
    inputStylePwDIcon?: any,
    containerInput?: any;
    hideIconClear?: boolean;
    minHeight?: number | string;
    maxHeight?: number | string;
    onChangeText?: any;
    styleGroup?: any;
    onKeyPress?: any;
    isIcon?: boolean | undefined
    onEndEditing?: (text: string, tag?: string) => any;
    onClickRightIcon?: (text: string) => any;
    onFocusCallback?: (tag?: string) => any;
}

export type TextFieldActions = {
    setValue: (text: string | number) => void;
    fillValue: (text: string | number) => void;
    getValue: () => any;
    focus: () => void;
    blur: () => void;
    setErrorMsg: (msg?: string) => void;
    eventTextChange: (text?: string) => void;
};

