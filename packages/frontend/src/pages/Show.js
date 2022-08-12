import React, { useState } from "react";
import styled from "styled-components";
import { Autocomplete, Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShowItem from "../components/Show/ShowItem";
const TotalWidthSetting = styled.div`
  width: 1400px;
  padding-bottom: 100px;
  margin: auto;
`;

const UpperTitleArea = styled.div`
  margin: 40px;
  font-size: 36px;
  font-weight: 700;
  margin-left: 90px;
  margin-bottom: 40px;
  margin-top: 50px;
`;

const TotalWrapJustifyCenter = styled.div`
  display: flex;
  justify-content: left;
`;

const SearchBarCategoryArea = styled.div`
  width: 400px;
  margin-left: 50px;
`;

const CategoryBarDiv = styled.div`
  margin: 40px 0 0 38px;
  width: 300px;
`;

const ShowListArea = styled.div`
  width: 800px;
  margin-top: 20px;
`;

const Show = () => {
  const [showList, SetShowList] = useState([1, 2, 3, 4, 5]);

  return (
    <TotalWidthSetting>
      <UpperTitleArea>
        오늘의 공연
        <p
          style={{
            marginTop: "18px",
            fontSize: "18px",
            fontWeight: "400",
            marginLeft: "2px",
          }}
        >
          인플루언서의 행사에 참여해보세요 !
        </p>
      </UpperTitleArea>
      <TotalWrapJustifyCenter>
        <SearchBarCategoryArea>
          <TextField
            id="search"
            label="제목 또는 판매자"
            variant="standard"
            sx={{ ml: 5, width: 300 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon style={{ color: "#000000" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </SearchBarCategoryArea>
        <ShowListArea>
          <Grid container spacing={7} rowSpacing={6}>
            {showList.map((show, idx) => (
              <Grid item xs={4} key={idx}>
                <ShowItem idx={idx} />
              </Grid>
            ))}
          </Grid>
        </ShowListArea>
      </TotalWrapJustifyCenter>
    </TotalWidthSetting>
  );
};

export default Show;
