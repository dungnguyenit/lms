import React from 'react';
import style from './modalHeader.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(style);
const ModalHeader = () => {
    return (
        <div className={cx('container')}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default ModalHeader;
