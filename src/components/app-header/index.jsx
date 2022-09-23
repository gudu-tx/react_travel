import React, { memo, useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed, topAlpha } = headerConfig;

  const { scrollY } = useScrollPosition();
  const prevY = useRef();
  useEffect(() => {
    prevY.current = 0;
  }, []);
  if (!isSearch) prevY.current = scrollY;
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false);

  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={ isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={ isAlpha || isSearch} />
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
