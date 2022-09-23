import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DetailInfos from './c-cpns/deatil-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false, topAlpha:false}))
  },[dispatch]) 

  return (
    <DetailWrapper>
      <AppHeader/>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail