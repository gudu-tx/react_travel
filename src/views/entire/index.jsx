import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect} from 'react'
import { useDispatch } from 'react-redux' 
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { changeHeaderConfigAction } from '@/store/modules/main'
import AppHeader from '@/components/app-header'

const Entire = memo(() => {
  const dispatch = useDispatch()
  // 发送网络请求, 获取数据, 并且保存当前的页面等等....
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed:true, topAlpha:false}))
    
  }, [dispatch])

  // useEffect(() => {
  //   getEntireRoomList(0).then(res => {
  //     console.log(res)
  //   })
  // })
    

  return (
    <EntireWrapper>
      <AppHeader/>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire
