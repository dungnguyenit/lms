export type ModalChoosePositionProps = {
    onClose?: () => any;
    onConfirm?: (data: any, title: any) => any;
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

export type ModalChoosePositionActions = {
    showModal: (content?: string) => any;
    hideModal: (content?: string) => any;
};


