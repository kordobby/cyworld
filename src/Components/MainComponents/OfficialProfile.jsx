import O1 from '../../Public/Images/O1.jpeg';
import O2 from '../../Public/Images/O2.jpeg';
import O5 from '../../Public/Images/O5.png';
import O6 from '../../Public/Images/O6.png';
import O3 from '../../Public/Images/O3.png';
import O4 from '../../Public/Images/O4.png';
import O7 from '../../Public/Images/O7.png';
import O8 from '../../Public/Images/O8.png';
import O9 from '../../Public/Images/O9.png';
import O10 from '../../Public/Images/O10.png';

import styled from 'styled-components';
import flex from '../GlobalStyled/flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

const OfficialProfile = () => {
  const imgList = [O1, O2, O5, O3, O6, O2, O7, O8, O4, O9, O10];

  return (
    <>
    <Swiper
      slidesPerView={4}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <OfficialWrap>
          { imgList.map((value, index) => {
              return (
              <SwiperSlide key = {index}>
                <OfficialProfiles> 
                  <OfficialCheck>
                    <span><FontAwesomeIcon icon = {faCheck}/></span>
                  </OfficialCheck>
                  <img className = "official" src = {value} alt = "" />
                </OfficialProfiles>
              </SwiperSlide> )
            })}
        </OfficialWrap>
        </Swiper>
      </>
  );
}

const OfficialWrap = styled.div`
  height : 70%;
  width : calc(100vh - 53vh);
  box-sizing: border-box;
  ${flex({align : 'center', justify : 'center'})}
  background-color: ${props => props.theme.bgColor};
  & > .slider {
    height : 70%;
    width : calc(100vh - 53vh);
    box-sizing: border-box;
    ${flex({align : 'center', justify : 'center'})}
  }
`

const OfficialProfiles = styled.div`
  position : relative;
  cursor : pointer;
  & > .official {
    width : 70px;
    height: 70px;
    background-color: #C2E8F6;
    border-radius: 26px;
  }
  &:hover {

  }
`

const OfficialCheck = styled.div`
  width : 18px;
  height: 18px;
  border-radius: 10px;
  position : absolute;
  right : 0;
  top : 0;
  background-color: var(--orange);
  color : white;
  ${flex({align : 'center', justify : 'center'})}
  font-size: 12px;
`

export default OfficialProfile;