import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './dropdown-top.module.scss';
import { DropdownTopProps } from './types';

const cx = classNames.bind(styles);

const _data: MenuProps['items'] = [
    {
        label: 'Chọn chức vụ',
        key: 'sub1',
        children: [
            {
                label: 'Trưởng phòng giao dịch',
                key: '1'
            },
            {
                label: 'Chuyên viên kinh doanh',
                key: '2'
            },
            {
                label: 'Kế toán',
                key: '3',
                children: [
                    {
                        key: '3-1',
                        label: 'Kế toán 1'
                    },
                    {
                        key: '3-2',
                        label: 'Kế toán 2'
                    }
                ]
            },
            {
                label: 'Công nghệ',
                key: '4'
            }
        ]
    }
];


const DropDownTop = ({ onPress }: DropdownTopProps) => {

    const [data, setData] = useState(_data);

    const onClick = e => {
        console.log('click ', e);
        onPress?.(e?.key);
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: 256, color: 'red' }}
            mode="inline"
            items={data}
            color={'red'}
            className={cx('container')}
        />
    );
};

export default DropDownTop;

