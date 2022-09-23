import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../root-item'
import { RoomsWrapper } from './style'


const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  
    return (
   <RoomsWrapper>
        {
            roomList.slice(0,8)?.map(item => {
                return(
                    //  <RoomItem itemData={item} key={item.id}/>
                    <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
                )
            })
        }
   </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms