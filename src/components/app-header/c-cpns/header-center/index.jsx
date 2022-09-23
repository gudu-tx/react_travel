import IconSearchBar from "@/assets/svg/icon-search-bar";
import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import searchTitles from "@/assets/data/search_titles.json";
import SearchTabs from "./c-cpns/search-tabs";
import SearchSections from "./c-cpns/search-sections";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

const HeaderCenter = memo((props) => {
  const titles = searchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);
  const { isSearch, searchBarClick } = props;

  function tabClickHandle(index) {
    setTabIndex(index);
  }

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      <CSSTransition
      in={!isSearch}
      classNames="bar"
      timeout={250}
      unmountOnExit={true}
      >
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
      in={isSearch}
      classNames="detail"
      timeout={250}
      unmountOnExit={true}
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={tabClickHandle} />
          <div className="infos">
            <SearchSections searchInfo={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
