import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

// Navbar에 페이지 추가하고싶으시면, 바로 아랫 줄 pages 안에 요소 추가하시면 됩니다.
const pages = [
  // "Profile",
  { name: "인플루언서", link: "Influencer" },
  { name: "행사", link: "Show" },
  { name: "커뮤니티", link: "Community" },
  { name: "티켓북", link: "TicketBook" },
  { name: "티켓리셀", link: "TicketReSell" },
  { name: "가이드", link: "Guide" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home");
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
