import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IcAdd from 'assets/icon/ic_add.svg';
import IcDetail from 'assets/icon/ic_detail.svg';
import IcSearch from 'assets/icon/ic_search.svg';
import IcDelete from 'assets/icon/ic_delete.svg';
import classNames from 'classnames/bind';
import Languages from 'commons/languages';
import { Button } from 'components/button';
import { MyTextInput } from 'components/input';
import ModalSearch from 'components/modal-search';
import PaginationRounded from 'components/pagination-rounded';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { dataDecentralization, rows } from '../__mocks__/TestApiProductUnivest';
import styles from './user-management.module.scss';

const cx = classNames.bind(styles);

export type dataTable = {
    stt: number,
    email: string,
    name: string,
    phone: string,
    date: string,
    status: string,
    position: string
}

const UserManagement = () => {

    const [type, setType] = React.useState(0);
    const [pages, setPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const counts = rows?.length % rowsPerPage !== 0 ? Math.floor(rows?.length / rowsPerPage) + 1 : Math.floor(rows?.length / rowsPerPage);
    const refModalSearch = useRef<any>(null);
    const [valueSearch, setValueSearch] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [position, setPosition] = useState<string>('');


    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
    };

    const onChange = useCallback((item) => {
        setType(item?.name);
    }, []);

    const renderItemTabs = useCallback((items, index) => {

        return (
            <div className={cx('view-tabs')} key={index}>
                <Button
                    containButtonStyles={type === items?.name ? cx('background-color-tabs') : cx('button-tabs')}
                    label={items?.name}
                    onPress={() => onChange(items)}
                    labelStyles={type === items?.name ? cx('labelStyles-white') : cx('labelStyles-black')}
                    isLowerCase
                />
            </div>
        );

    }, [onChange, type]);

    const onChangeText = useCallback((txt) => {
        console.log('text:', txt?.target?.value);
    }, []);

    const handleSearch = useCallback(() => {
        refModalSearch?.current?.showModal();
    }, []);

    const renderViewTop = useMemo(() => {
        return (
            <div className={cx('view-top')}>
                <div className={cx('view-top-left')}>
                    <h1 className={cx('txt-management')}>{Languages.userManagement.userManagement}</h1>
                    {/* địa chỉ */}
                    <p className={cx('txt-address')}>{''}</p>
                </div>
                <Button
                    containButtonStyles={cx('btn-news-user')}
                    onPress={() => console.log('New user')}
                    label={Languages.userManagement.creactUser}
                    rightIcon={IcAdd}
                    isLowerCase
                />
            </div>
        );
    }, []);

    const renderViewBodyLeft = useMemo(() => {
        return (
            <div className={cx('view-body-left')}>
                <div className={cx('view-body-left-group')}>
                    <h2 className={cx('txt-group')}>{Languages.userManagement.groupUser}</h2>
                    <MyTextInput
                        rightIcon={IcSearch}
                        type={'text'}
                        inputStyle={cx('view-body-left-input')}
                        containerInput={cx('container-input')}
                        placeHolder={Languages.userManagement.search}
                        styleGroup={cx('input-group')}
                        onChangeText={onChangeText}
                        value={valueSearch}
                        maxLength={50}
                    />
                </div>
                <div className={cx('scroll-body-left')}>
                    {
                        dataDecentralization?.map((item, index) => {
                            return (
                                renderItemTabs(item, index)
                            );
                        })
                    }
                </div>
            </div>
        );
    }, [onChangeText, renderItemTabs, valueSearch]);

    const renderViewTable = useMemo(() => {
        return (
            <TableContainer component={Paper} className={cx('table-container')} >
                <Table aria-label="simple table" className={cx('table')}>
                    <TableHead className={cx('table-head')}>
                        <TableRow
                            className={cx('table-row')}
                        >
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.stt}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.email}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.name}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.sdt}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.date}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.status}</TableCell>
                            <TableCell align="center" className={cx('txt-tableCell')}>{Languages.userManagement.table.position}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        className={cx('table-body')}
                    >
                        {rows
                            .slice((pages - 1) * rowsPerPage, (pages - 1) * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow
                                    key={row.stt}
                                    className={row.stt % 2 === 0 ? cx('table-body-row-white') : cx('table-body-row-gray')}
                                >
                                    <TableCell align="center">{row.stt}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.phone}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell
                                        align="center"
                                        onClick={() => console.log('assaas')}
                                        className={row?.status === 'Active' ? cx('status-active') : row?.status === 'Block' ? cx('status-block') : cx('status-new')}
                                    >
                                        <div className={cx('view-status')}>
                                            {row.status}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center" style={{ color: 'green' }} onClick={() => console.log('Click xem chi tiết')}>
                                        {Languages.userManagement.table.detail}
                                        <img src={IcDetail} className={cx('img-detail')} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }, [pages, rowsPerPage]);



    const renderItemSearch = useCallback((text: string, title: string) => {

        const onClose = () => {
            refModalSearch.current?.setValue(title);
            switch (title) {
                case 'email':
                    return setEmail('');
                case 'name':
                    return setName('');
                case 'phone':
                    return setPhone('');
                case 'position':
                    return setPosition('');
                default:
                    return;
            }
        };

        return (
            <Button
                containButtonStyles={cx('item-search')}
                label={text}
                rightIcon={IcDelete}
                rightIconStyles={cx('img-delete')}
                labelStyles={cx('label')}
                isLowerCase
                onPress={onClose}
            />
        );
    }, []);

    const renderViewSearch = useMemo(() => {
        return (
            <div className={cx('view-search-table')}>
                {email.length > 0 && renderItemSearch(email, 'email')}
                {name.length > 0 && renderItemSearch(name, 'name')}
                {phone.length > 0 && renderItemSearch(phone, 'phone')}
                {position.length > 0 && renderItemSearch(position, 'position')}
            </div>
        );
    }, [email, name, phone, position, renderItemSearch]);

    const onContiue = useCallback((_email: string, _name: string, _phone: string, _position: string) => {
        setEmail(_email);
        setName(_name);
        setPhone(_phone);
        setPosition(_position);
    }, []);

    return (
        <div className={cx('container')}>
            {renderViewTop}
            <div className={cx('view-body')}>
                {renderViewBodyLeft}
                <div className={cx('view-body-right')}>
                    <div className={cx('view-body-right-group')}>
                        <h2 className={cx('txt-group')}>{Languages.userManagement.userManagement}</h2>
                        <div className={cx('view-search-body-right')}>{renderViewSearch}</div>
                        <Button
                            containButtonStyles={cx('view-body-right-button')}
                            label={Languages.userManagement.search}
                            labelStyles={cx('button-group-right')}
                            rightIcon={IcSearch}
                            rightIconStyles={cx('icon-right')}
                            isLowerCase
                            onPress={handleSearch}
                        />
                    </div>
                    {renderViewTable}
                    <PaginationRounded
                        count={counts}
                        page={pages}
                        onPress={handleChangePage}
                        containerStyle={cx('pagination-contain')}
                    />
                </div>
            </div>
            <ModalSearch ref={refModalSearch} description={'Tìm kiếm User'} onSuccessPress={onContiue} />
        </div>
    );
};

export default UserManagement;
