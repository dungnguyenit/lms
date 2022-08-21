import icLogo from 'assets/icon/logo.svg';
import Languages from 'commons/languages';
import { Paths } from 'routers/paths';

export const data = [
    {
        title: 'Cân Bằng ',
        title1: 'Tích luỹ 1 tháng',
        title2: 'Tích luỹ kì hạn 3  tháng ',
        title3: 'Tích luỹ kì hạn 6 tháng',
        content: 'Lãi suất 5 % trên năm ',
        content1: 'Nhận lãi cuối kì ',
        content2: 'Rút tiền miễn phí không mất lãi',
        img: icLogo,
        id: 1
    },
    {
        title: 'Linh Hoạt',
        title1: 'Tích luỹ kì hạn 7 ngày ',
        title2: 'Tích luỹ kì hạn 3 tháng ',
        title3: 'Tích luỹ kì hạn 6 tháng',
        content: 'Lãi suất 5 % trên năm ',
        content1: 'Nhận lãi cuối kì ',
        content2: 'Rút tiền miễn phí không mất lãi',
        img: icLogo,
        id: 2,
    },
    {
        title: 'Lợi nhuận',
        title1: 'Tích luỹ 1 tháng',
        title2: 'Tích luỹ kì hạn 3  tháng ',
        title3: 'Tích luỹ kì hạn 6 tháng',
        content: 'Lãi suất 5 % trên năm ',
        content1: 'Nhận lãi cuối kì ',
        content2: 'Rút tiền miễn phí không mất lãi',
        img: icLogo,
        id: 3
    },
    {
        title: 'Túi Univest ',
        title1: 'Tích luỹ 1 tháng',
        title2: 'Tích luỹ kì hạn 3  tháng ',
        title3: 'Tích luỹ kì hạn 6 tháng',
        content: 'Lãi suất 4 % trên năm ',
        content1: 'Nhận lãi cuối kì ',
        content2: 'Rút tiền miễn phí không mất lãi',
        img: icLogo,
        id: 4,
    },
];

export const dataTestMenu = [
    {
        id: '1',
        title: Languages.menu.salesInfo,
        path: Paths.home,
        key: 'a',
        options: [
            {
                label: 'Quản lý bảo hiểm',
                key: 'Quản lý bảo hiểm',
                children: [
                    {
                        key: 'Quản lý user',
                        label: 'Quản lý User',
                    },
                    {
                        key: 'Quản lý user1',
                        label: 'Quản lý user1',
                    }
                ]
            },
            {
                label: '2nd menu item',
                key: '2'
            },
            {
                label: '3rd menu item',
                key: '3'
            }
        ]
    },
    {
        id: '2',
        title: Languages.menu.contract,
        path: Paths.contract,
        options: [
        ]
    },
    {
        id: '3',
        title: Languages.menu.insurance,
        path: Paths.userManagementDetail,
        options: [
        ]
    },
    {
        id: '4',
        title: Languages.menu.payment,
        path: Paths.profile,
        options: [
        ]
    },
    {
        id: '5',
        title: Languages.menu.other,
        path: Paths.home,
        options: [
        ]
    }, {
        id: '6',
        title: Languages.menu.calculateTool,
        path: Paths.home,
        options: [
        ]
    }
]

export const dataDecentralization = [
    {
        id: '1',
        name: 'Admin'
    },
    {
        id: '2',
        name: 'Chuyên viên kinh doanh'
    },
    {
        id: '3',
        name: 'Hội sở'
    },
    {
        id: '3',
        name: 'Phê duyệt'
    },
    {
        id: '4',
        name: 'Trưởng phòng giao dịch'
    },
    {
        id: '5',
        name: 'Vận hành'
    },
    {
        id: '7',
        name: 'Thu hồi nợ miền nam1'
    }
    ,
    {
        id: '8',
        name: 'Thu hồi nợ miền nam212dqw'
    }
    ,
    {
        id: '9',
        name: 'Thu hồi nợ miền nam123ewd'
    }
    ,
    {
        id: '10',
        name: 'Thu hồi nợ miền namsdasd1'
    }
    ,
    {
        id: '11',
        name: 'Thu hồi nợ miền nam23123'
    }
    ,
    {
        id: '12',
        name: 'Thu hồi nợ miền nam12312123'
    }
    ,
    {
        id: '13',
        name: 'Thu hồi nợ miền nam12312'
    }
    ,
    {
        id: '14',
        name: 'Thu hồi nợ miền nam42'
    },
    {
        id: '15',
        name: 'Thu hồi nợ miền nam312'
    }
    ,
    {
        id: '16',
        name: 'Thu hồi nợ miền nam1212'
    }
    ,
    {
        id: '17',
        name: 'Thu hồi nợ miền namaw1'
    }
    ,
    {
        id: '18',
        name: 'Thu hồi nợ miền namasdas'
    },
    {
        id: '19',
        name: 'Thu hồi nợ miền namsdas'
    }
    ,
    {
        id: '20',
        name: 'Thu hồi nợ miền namas'
    }
    ,
    {
        id: '21',
        name: 'Thu hồi nợ miềấn nama'
    },
    {
        id: '22',
        name: 'Thu hồi nợ mádasiền nama'
    },
    {
        id: '23',
        name: 'Thu hồi nợádas miền nama'
    },
    {
        id: '24',
        name: 'Thu hồi nợ miadsasền nama'
    },
    {
        id: '25',
        name: 'Thu hồi nợ d nama'
    }
]

export const rows = [
    {
        stt: 0,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Active',
        position: 'admin'
    },
    {
        stt: 1,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Active',
        position: 'admin'
    },
    {
        stt: 2,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Active',
        position: 'admin'
    },
    {
        stt: 3,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Active',
        position: 'admin'
    },
    {
        stt: 4,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Block',
        position: 'admin'
    },
    {
        stt: 5,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Block',
        position: 'admin'
    },
    {
        stt: 6,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Block',
        position: 'admin'
    },
    {
        stt: 7,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Block',
        position: 'admin'
    },
    {
        stt: 8,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'New',
        position: 'admin'
    },
    {
        stt: 9,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'New',
        position: 'admin'
    },
    {
        stt: 10,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'New',
        position: 'admin'
    },
    {
        stt: 11,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'New',
        position: 'admin'
    },
    {
        stt: 12,
        email: 'Duybx@tienngay.vn',
        name: 'Duy',
        phone: '0862319100',
        date: '08-08-2021',
        status: 'Block',
        position: 'Xem chi tiết'
    }

]
export const donationGroup = [
    {
        id: 1,
        title: 'Admin'
    },
    {
        id: 2,
        title: 'Chuyên viên kinh doanh'
    },
    {
        id: 3,
        title: 'Trưởng phòng giao dịch'
    },
    {
        id: 4,
        title: 'Field thu hồi nợ miền Nam	'
    },
    {
        id: 5,
        title: 'Lead THN Miền Nam'
    },
    {
        id: 6,
        title: 'Call thu hồi nợ miền Bắc'
    },
    {
        id: 7,
        title: 'Call thu hồi nợ miền Nam'
    },
    {
        id: 8,
        title: 'Nguồn vốn đầu tư'
    },
    {
        id: 9,
        title: 'Telesales - Kinh doanh'
    },
    {
        id: 10,
        title: 'ASM Fintechser'
    },
    {
        id: 11,
        title: 'ASM Fintechser'
    },
    {
        id: 12,
        title: 'Kế toán trưởng'
    },
    {
        id: 13,
        title: 'Kế toán'
    },
    {
        id: 14,
        title: 'TBP Telesale'
    },
    {
        id: 15,
        title: 'Thu hồi nợ'
    },
    {
        id: 16,
        title: 'Kế toán'
    }
]
export const listUser = [
    {
        id:1,
        title: 'Chuyên viên kinh doanh',
        option: [
            {
                id: 1,
                title: 'Xem hợp đồng vay'
            },
            {
                id: 2,
                title: 'Tạo hợp đồng vay'
            },
            {
                id: 3,
                title: 'Hủy hợp đồng vay'
            },
            {
                id: 4,
                title: 'Sửa hợp đồng vay'
            },
            {
                id: 5,
                title: 'Upload chứng từ hợp đòng vay'
            },
            {
                id: 6,
                title: 'Cửa hàng trưởng duyệt'
            }
        ]
    },
    {
        id: 2,
        title: 'Chuyên viên kinh doanh',
        option: [
            {
                id: 1,
                title: 'Xem hợp đồng vay'
            },
            {
                id: 2,
                title: 'Tạo hợp đồng vay'
            },
            {
                id: 3,
                title: 'Hủy hợp đồng vay'
            },
            {
                id: 4,
                title: 'Sửa hợp đồng vay'
            },
            {
                id: 5,
                title: 'Upload chứng từ hợp đòng vay'
            },
            {
                id: 6,
                title: 'Cửa hàng trưởng duyệt'
            }
        ]
    },
    {
        id:3,
        title: 'Trưởng phòng giao dịch',
        option: [
            {
                id: 1,
                title: 'Xem hợp đồng vay'
            },
            {
                id: 2,
                title: 'Tạo hợp đồng vay'
            },
            {
                id: 3,
                title: 'Hủy hợp đồng vay'
            },
            {
                id: 4,
                title: 'Sửa hợp đồng vay'
            },
            {
                id: 5,
                title: 'Upload chứng từ hợp đòng vay'
            },
            {
                id: 6,
                title: 'Cửa hàng trưởng duyệt'
            }
        ]
    },
]
export const notification = [
    {
        id: 1,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    },
    {
        id: 2,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    },
    {
        id: 3,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    },
    {
        id: 4,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    },
    {
        id: 5,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    },
    {
        id: 6,
        title : 1001210112,
        name: 'Hoangtt@gmail.com' ,
        times: '12/22/2022'
    }
]

export const telephone = [
    {
        id: 1,
        title: '1'
    },
    {
        id: 2,
        title: '2'
    },
    {
        id: 3,
        title: '3'
    },
    {
        id: 4,
        title: '4'
    },
    {
        id: 5,
        title: '5'
    },
    {
        id: 6,
        title: '6'
    },
    {
        id: 7,
        title: '7'
    },
    {
        id: 8,
        title: '8'
    },
    {
        id: 9,
        title: '9'
    },
    {
        id: 10,
        title: '*'
    },
    {
        id: 11,
        title: '0'
    },
    {
        id: 12,
        title: '#'
    },
]

export const dataCheckBox = [
    {
        id: '1',
        label: 'Kế toán',
        type: false,
        children: [
            {
                id: '1',
                title: 'Xem hợp đồng vay',
                type: '1'
            },
            {
                id: '2',
                title: 'Tạo hợp đồng vay',
                type: '2'
            },
            {
                id: '3',
                title: 'Huỷ hợp đồng vay',
                type: '1'
            },
            {
                id: '4',
                title: 'Sửa hợp đồng vay',
                type: '2'
            },
            {
                id: '5',
                title: 'Upload chứng từ hợp đồng vay',
                type: '2'
            },
            {
                id: '6',
                title: 'Cửa hàng trưởng duyệt',
                type: '1'
            },
            {
                id: '7',
                title: 'Gửi duyệt cho cửa hàng trưởng',
                type: '1'
            },
            {
                id: '8',
                title: 'Cập nhật hợp đồng MEGADOC',
                type: '2'
            },
            {
                id: '9',
                title: 'Tạo đơn miễn giảm',
                type: '1'
            }
        ]
    }
]

export const dataCN = {
    id: '2',
    label: 'Công nghệ',
    type: true,
    children: [
        {
            id: '1',
            title: 'Xem hợp đồng vay',
            type: '2'
        },
        {
            id: '2',
            title: 'Tạo hợp đồng vay',
            type: '2'
        },
        {
            id: '3',
            title: 'Huỷ hợp đồng vay',
            type: '2'
        },
        {
            id: '4',
            title: 'Sửa hợp đồng vay',
            type: '2'
        },
        {
            id: '5',
            title: 'Upload chứng từ hợp đồng vay',
            type: '2'
        },
        {
            id: '6',
            title: 'Cửa hàng trưởng duyệt',
            type: '2'
        },
        {
            id: '7',
            title: 'Gửi duyệt cho cửa hàng trưởng',
            type: '2'
        }
    ]
}

export const transaction = [
    {
        id: 1,
        title: '901 giải phóng',
   
    },
    {
        id: 2,
        title: '21DA Lê Văn Lương',
     
    },
    {
        id: 3,
        title: '901 giải phóng',
      
    },
    {
        id: 4,
        title: '901 giải phóng'
    },
    {
        id: 5,
        title: '901 giải phóng'
    },
    {
        id: 6,
        title: '901 giải phóng'
    },
    {
        id: 7,
        title: '901 giải phóng'
    },
    {
        id: 8,
        title: '901 giải phóng'
    },
    {
        id: 9,
        title: '901 giải phóng'
    },
    {
        id: 10,
        title: '901 giải phóng'
    },
    {
        id: 12,
        title: '21DA Lê Văn Lương'
    }
   
]

export const dataPosition = [
    {
        label: 'Trưởng phòng giao dịch',
        key: '1',
        children: []
    },
    {
        label: 'Chuyên viên kinh doanh',
        key: '2',
        children: []
    },
    {
        label: 'Kế toán',
        key: '3',
        children: [
            {
                key: '3-1',
                label: 'Kế toán 1',
                children: []
            },
            {
                key: '3-2',
                label: 'Kế toán 2',
                children: []
            }
        ]
    },
    {
        label: 'Công nghệ',
        key: '4',
        children: [
            {
                key: '4-1',
                label: 'Công nghệ 1',
                children: [
                    {
                        key: '4-1-1',
                        label: 'Công nghệ 1-1',
                        children: []
                    },
                    {
                        key: '4-1-2',
                        label: 'Công nghệ 1-2',
                        children: []
                    }
                ]
            },
            {
                key: '4-2',
                label: 'Công nghệ 2',
                children: []
            },
            {
                key: '4-3',
                label: 'Công nghệ 3',
                children: []
            }
        ]
    }
];
