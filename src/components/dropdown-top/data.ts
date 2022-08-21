import { MenuProps } from 'antd'
export const danh_sach_chuc_vu: MenuProps['items'] = [
  {
    label: 'Trưởng phòng giao dịch',
    key: 1,
    children: []
  },
  {
    label: 'Chuyên viên kinh doanh',
    key: 2,
    children: []
  },
  {
    label: 'Kế toán',
    key: 3,
    children: [
      {
        key: 4,
        label: 'Kế toán 111'
      },
      {
        key: 5,
        label: 'Kế toán 211'
      }
    ]
  },
  {
    label: 'Công nghệ',
    key: 6,
    children: []
  }
]
