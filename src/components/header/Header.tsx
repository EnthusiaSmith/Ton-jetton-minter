import { IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { HeaderMenu, MobileMenu } from "components/header/headerMenu/HeaderMenu";
import { HeaderContent, HeaderOptionalContent, HeaderWrapper } from "./styled";
import { Outlet, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const matches = useMediaQuery("(min-width:900px)");

  const location = useLocation();
  const topRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView();
  }, [location]);

  return (
    <>
      <HeaderWrapper position="static" ref={topRef}>
        <HeaderContent>
          <HeaderOptionalContent>
            {!matches && (
              <IconButton onClick={() => setMobileMenu(true)}>
                <MenuRoundedIcon style={{ width: 40, height: 40, color: "#50A7EA" }} />
              </IconButton>
            )}
            {matches && <HeaderMenu />}
          </HeaderOptionalContent>

          <MobileMenu showMenu={mobileMenu && !matches} closeMenu={() => setMobileMenu(false)} />
        </HeaderContent>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};
