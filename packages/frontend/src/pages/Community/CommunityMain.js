import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Autocomplete, Grid, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import ShowItem from "../../components/Community/ShowItem";
import { useDispatch, useSelector } from "react-redux";
import { InfluencerSearch } from "../../actions/post";
import ReactPaginate from "react-paginate";
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
`;

const CommunityMain = () => {
  const dispatch = useDispatch();
  const showList = useSelector((state) => state.posts.influencerList);
  console.log(showList);
  useEffect(() => {
    dispatch(InfluencerSearch());
    return () => {};
  }, []);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 3;
    setCurrentItems(showList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(showList.length / 3));
  }, [itemOffset, showList]);

  // Invoke when user click to request another page.
  const handlePageClick = useCallback(
    (event) => {
      const newOffset = (event.selected * 3) % showList.length;
      setItemOffset(newOffset);
    },
    [showList],
  );

  return (
    <TotalWidthSetting>
      <UpperTitleArea>
        인플루언서
        <p
          style={{
            marginTop: "18px",
            fontSize: "18px",
            fontWeight: "400",
            marginLeft: "2px",
          }}
        >
          당신의 인플루언서를 찾아보세요!
        </p>
      </UpperTitleArea>
      <TotalWrapJustifyCenter>
        <SearchBarCategoryArea>
          <TextField
            id="search"
            label="인플루언서 검색"
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

export default CommunityMain;
