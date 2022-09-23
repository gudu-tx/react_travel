import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cpns/home-banners";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { isEmptyO } from "@/utils";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo} =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
      }),
      shallowEqual
    );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
    dispatch(changeHeaderConfigAction({isFixed:true, topAlpha:true}))
  }, [dispatch]);

  return (
    <HomeWrapper>
      <AppHeader/>
      <HomeBanner />
      <div className="content">
        {/* <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
        <div className="high-score">
        <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
        <SectionRooms roomList={highScoreInfo.list}/>
        </div> */}
       { isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        { isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
        { isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/> }
        { isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/> }
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  );
});

export default Home;
