export type PopupProps = {
    onClose?: () => any;
    onConfirm?: () => any;
    onBackdropPress?: () => any;
    onSuccessPress?: () => any;
    onCodeChanged?: () => any;
    onSuccess?: any;
    content?: string;
    btnText?: string;
    description?: string;
    title?: string,
    isIcon?: boolean,
    icon?: any,
    hasButton?: boolean,
    keyCode?: any,
    webView?: string
};

export type PopupActions = {
    showModal: (content?: string) => any;
    hideModal: (content?: string) => any;
};


