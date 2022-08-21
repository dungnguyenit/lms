import type { MenuProps } from 'antd';
import { Button, Dropdown, Menu } from 'antd';
import IcMenu from 'assets/icon/ic_menu.svg';
import IcRight from 'assets/icon/ic_right.svg';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { dataTestMenu } from 'pages/__mocks__/TestApiProductUnivest';
import React, { ReactElement, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths } from 'routers/paths';
import styles from './menu.module.scss';
// import { useAppStore } from 'hooks';

const cx = classNames.bind(styles);

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(Languages.menu.salesInfo, Paths.home, null),
    getItem(Languages.menu.contract, Paths.contract, null),
    getItem(Languages.menu.insurance, Paths.userManagementDetail, null, [
        getItem(Languages.menu.insuranceOutOfSale, Paths.profile),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8')
    ]),
    getItem(Languages.menu.payment, 'null', null),
    getItem(Languages.menu.other, 'null1', null),
    getItem(Languages.menu.calculateTool, 'null2', null),

    // getItem('Navigation Two', 'sub2', null, [
    //     getItem('Option 9', '9'),
    //     getItem('Option 10', '10'),

    //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')])
    // ])

    getItem('Pin', '13', null)
];

export type ModalProps = {
    component?: ReactElement
};

export type ModalAction = {
    toggleCollapsed?: () => any,
};

const MenuGroup = ({ component }: ModalProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const navigate = useNavigate();

    const toggleCollapsed = useCallback(() => {

        setCollapsed(last => !last);
    }, []);

    const onNavigate = useCallback((e: any) => {
        switch (e?.key) {
            case Paths.home:
                navigate(Paths.home);
                break;
            case Paths.userManagementDetail:
                navigate(Paths.userManagementDetail);
                break;
            case Paths.contract:
                navigate(Paths.contract);
                break;
            case Paths.profile:
                navigate(Paths.profile);
                break;
            case '13':
                setShow(!show);
                break;
            default:
                break;
        }

        if (show) {
            setCollapsed(show);
        }

    }, [navigate, show]);

    const handlerDropDown = useCallback((item, index) => {

        const onNavigateItem = ((e: any) => {
            navigate(e?.path, { replace: true });
        });

        return (
            <>
                {item?.options?.length ?
                    <div className={cx('btn-item')}>
                        <Dropdown overlay={<Menu items={item?.options} onClick={e => console.log('e',)} />}>
                            <div className={cx('child-dropdown')}>
                                <a>
                                    <p className={cx('txt-item')}>{item.title}</p>
                                </a>
                                <img src={IcRight} />
                            </div>
                        </Dropdown>
                    </div>
                    :
                    <>
                        <button
                            className={cx('btn-item')}
                            key={`${item.id}${index}`}
                            onClick={() => onNavigateItem(item)}>
                            <p className={cx('txt-item')}>{item.title}</p>
                            {/* <DownOutlined /> */}
                            <img src={IcRight} />

                        </button>
                    </>
                }
                {/* <img src={IcRight} className={cx('img-right')} /> */}
            </>
        );

    }, [navigate]);

    return (
        <div className={cx('container')}>

            <div className={cx('view-btn-menu')}>
                <p className={cx('txt-menu')}>{Languages.menu.menu}</p>
                <Button className={cx('btn-menu')} onClick={toggleCollapsed} disabled={show} >
                    <img src={IcMenu} />
                </Button>
                <div className={cx('view-dropdown')}>
                    {dataTestMenu?.map((item, index) => handlerDropDown(item, index))}
                </div>
            </div>
            <div className={cx('view-row')}>
                {collapsed ?
                    <Menu
                        mode="inline"
                        theme={'light'}
                        inlineCollapsed={false}
                        items={items}
                        className={cx('menu-container')}
                        onClick={e => onNavigate(e)}
                    />
                    : null}
                <div className={collapsed ? cx('page-collapsed') : cx('page-contain')}>
                    {component}
                </div>
            </div>
        </div>
    );
};

export default MenuGroup;





