import React, { useEffect, useState } from "react";
import axios from "../../api";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

// Navbar에 페이지 추가하고싶으시면, 바로 아랫 줄 pages 안에 요소 추가하시면 됩니다.
const pages = [
  // "Profile",
  { name: "인플루언서", link: "Influencer" },
  { name: "공연", link: "Show" },
  { name: "커뮤니티", link: "Community" },
  { name: "티켓북", link: "TicketBook" },
  { name: "티켓리셀", link: "TicketReSell" },
  { name: "가이드", link: "Guide" },
];

const Logo = styled.img`
  width: 107px;
  margin-top: 5px;
  background-color: #f5f5f5;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // 펼쳐진 상태에서의 Navbar 버튼클릭 이지만 비활성화 시켰다.
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) console.log("good");
      else {
        window.localStorage.removeItem("isConnect");
        async function logout() {
          try {
            const resLogout = await axios.post(
              "/user/logout",
              {},
              { withCredentials: true },
            );
            console.log(resLogout);
          } catch (err) {
            console.log(err);
          }
        }
        logout();
        navigate("/");
      }
    });
  }, []);
  return (
    <AppBar
      className="AppBar"
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar className="ToolBar" disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => {
              setCurrentPage("Home");
            }}
          >
            <Link className="Logo" to="/">
              Among
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color='inherit'
              // inherit 흰색 default 회색 primary 파랑 secondary 보라 error 빨강 info 파랑 success 초록 warning 주황 string 적용안됨
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                color: "text.secondary",
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => {
                if (page.link !== currentPage)
                  return (
                    <MenuItem
                      key={page.name}
                      onClick={() => {
                        navigate(`/${page.link}`);
                        setCurrentPage(page.link);
                      }}
                      sx={{
                        ":hover": {
                          color: "#e605ff",
                        },
                      }}
                    >
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  );
                return (
                  <MenuItem
                    key={page.name}
                    onClick={() => {
                      navigate(`/${page.link}`);
                      setCurrentPage(page.link);
                    }}
                    sx={{
                      ":hover": {
                        color: "#e605ff",
                      },
                      color: "#e605ff ",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          {/* 안펼친 로고 */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            onClick={() => {
              setCurrentPage("Home");
            }}
          >
            <Link className="Logo2" to="/">
              Among
            </Link>
          </Typography>

          {/* 펼친 Navbar 버튼들 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              mx: 3,
            }}
          >
            {pages.map((page) => {
              if (page.link !== currentPage)
                return (
                  <Button
                    key={page.name}
                    onClick={() => {
                      navigate(`/${page.link}`);
                      setCurrentPage(page.link);
                    }}
                    sx={{
                      textAlign: "center",
                      mx: 1,
                      my: 2,
                      color: "black",
                      fontSize: "20px",
                      fontFamily: "AppleSDGothicNeo",
                      fontWeight: 400,
                      display: "block",
                      ":hover": {
                        color: "rgb(76, 46, 208)",
                        bgcolor: "#f4f5fa",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                );
              return (
                <Button
                  key={page.name}
                  onClick={() => {
                    navigate(`/${page.link}`);
                    setCurrentPage(page.link);
                  }}
                  sx={{
                    textAlign: "center",
                    mx: 1,
                    my: 2,
                    color: "rgb(76, 46, 208)",
                    fontSize: "20px",
                    fontFamily: "AppleSDGothicNeo",
                    fontWeight: 700,
                    display: "block",
                    ":hover": {
                      color: "rgb(76, 46, 208)",
                      bgcolor: "#f4f5fa",
                    },
                  }}
                >
                  {page.name}
                </Button>
              );
            })}
          </Box>

          {window.localStorage.getItem("isConnect") === "true" && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={() => {
                    navigate("/MyPage");
                    setCurrentPage("MyPage");
                  }}
                  sx={{ p: 0 }}
                >
                  {true && (
                    <div style={{ marginRight: "15px" }} class="login">
                      마이페이지
                    </div>
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          )}
          {window.localStorage.getItem("isConnect") !== "true" && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={() => {
                    navigate("/Login");
                    setCurrentPage("Login");
                  }}
                  sx={{ p: 0 }}
                >
                  <div class="login">로그인</div>
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
