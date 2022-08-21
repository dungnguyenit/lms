import { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './dropdown-top.module.scss'
import { DropdownTopProps } from './types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { danh_sach_chuc_vu } from './data'
const cx = classNames.bind(styles)
const DropDownTop = ({ onPress }: DropdownTopProps) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [data, onAdd, onRemove] = useOffice()
  const onSelectOff = (item: any) => {
    onAdd(item)
    handleClose()
  }
  console.log('data', data)
  return (
    <>
      {data.length == 0 && (
        <Button onClick={handleOpen}>{'Chọn chức vụ'}</Button>
      )}

      {data.length != 0 &&
        data.map((i, j) => (
          <Box key={j} style={{ flexDirection: 'row' }}>
            <Typography>{i.label}</Typography>
            <Typography onClick={() => onRemove(i)}>{'Delete'}</Typography>
          </Box>
        ))}
      {data.length > 0 && <Button onClick={handleOpen}>Thêm chức vụ</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {'Danh sách chưc vu'}
          </Typography>
          {danh_sach_chuc_vu?.map((item: any, index) => (
            <Typography
              key={index}
              id='modal-modal-description'
              sx={{ mt: 2 }}
              onClick={() => onSelectOff(item)}
            >
              {item?.label}
              {item?.children.map((i, j) => (
                <Typography
                  key={index}
                  id='modal-modal-description'
                  sx={{ mt: 2 }}
                  style={{ marginLeft: 10 }}
                  onClick={() => onSelectOff(i)}
                >
                  {i?.label}
                </Typography>
              ))}
            </Typography>
          ))}
        </Box>
      </Modal>
    </>
  )
}

export default DropDownTop
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
const useOffice = () => {
  const [data, setData] = useState<any[]>([]) //
  const onAdd: any = (item: any) => {
    return setData(prev => [...prev, item])
  }
  const onRemove = (item: any) => {
    return setData(prev => prev.filter(i => i.key != item.key))
  }
  return [data, onAdd, onRemove]
}
