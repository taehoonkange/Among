import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Autocomplete, Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShowItem from "../components/Show/ShowItem";
import ReactPaginate from "react-paginate";
import "./pagination.css";
import { getPerformance } from "../actions/performance";
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

const ReactPaginateWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
`;
const Show = () => {
  const dispatch = useDispatch();
  const performanceData = useSelector((state) => state.performance.performance);
  const items = [...Array(50).keys()];
  const [showList, SetShowList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 3;
    setCurrentItems(performanceData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(performanceData?.length / 3));
  }, [itemOffset, performanceData]);

  // Invoke when user click to request another page.
  const handlePageClick = useCallback(
    (event) => {
      const newOffset = (event.selected * 3) % performanceData.length;
      setItemOffset(newOffset);
    },
    [performanceData],
  );

  useEffect(() => {
    dispatch(getPerformance());
  }, []);
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
            {currentItems?.map((show, idx) => (
              <Grid style={{ paddingTop: "0px" }} item xs={4} key={idx}>
                <ShowItem data={show} idx={idx} />
              </Grid>
            ))}
          </Grid>
        </ShowListArea>
      </TotalWrapJustifyCenter>
      <ReactPaginateWrapper>
        <ReactPaginateBox
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel=""
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          className="hey"
        />
      </ReactPaginateWrapper>
    </TotalWidthSetting>
  );
};

export default Show;

const ReactPaginateBox = styled(ReactPaginate)`
  display: flex;
  cursor: pointer;
  a {
    width: 100%;
    color: #777;
    text-align: center;
  }
  & > .page-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4em;
    background: #eef2f6;

    line-height: 28px;
    margin: 0 5px;
    min-width: 28px;
    font-size: 13px;
    font-weight: 600;
  }
  & > .page-item.active {
    color: white;
  }
  & > .active {
    background-color: #545c65;
  }
  & > .active a {
    color: white;
  }

  & > a.page-link {
    width: 100%;
  }
`;
