export type ModalTelephoneProps = {
    onClose?: () => any;
    onConfirm?: () => any;
    onBackdropPress?: () => any;
    onSuccessPress?: (...params: any[]) => any;
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

export type ModalTelephoneActions = {
    showModal: (content?: string) => any;
    hideModal: (content?: string) => any;
};


