import React, { useRef, useEffect, useCallback, useState } from "react";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import styled from "styled-components";
import "file-saver"; // 이거 있어야 다운로드 작동함
import { useDispatch, useSelector } from "react-redux";
import { uploadImages } from "../actions/performance";
import faker from "faker";
const myTheme = {};
const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Decorate = () => {
  const dispatch = useDispatch();
  const performanceDetail = useSelector(
    (state) => state.performance.performanceDetail,
  );
  const editorRef = useRef(null);
  const [data, setData] = useState();
  const editorToBase64 = async () => {
    const editorInstance = editorRef.current.getInstance();
    var image = editorInstance.toDataURL();
    console.log(image);
    setData(image);
    const imageFile = await convertURLtoFile(image);
    const imageFormData = new FormData();
    imageFormData.append("image", imageFile);
    dispatch(uploadImages(imageFormData));
  };
  const convertURLtoFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: `image/png` };
    return new File([data], `${faker.name.findName()}.png`, metadata);
  };
  const Test = useCallback(() => {
    editorRef.current.getInstance().ui.resizeEditor({
      imageSize: {
        oldWidth: 100,
        oldHeight: 100,
        newWidth: 300,
        newHeight: 300,
      },
      uiSize: { width: 500, height: 500 },
    });

    editorRef.current.getInstance().ui.resizeEditor();
  }, [editorRef.current]);

  //   const onChangeImages = useCallback((e) => {
  //     console.log("images", e.target.files);
  //     const imageFormData = new FormData();
  //     [].forEach.call(e.target.files, (image) => {
  //       imageFormData.append("image", image);
  //     });
  //     dispatch(uploadImages(imageFormData));
  //   }, []);

  return (
    <>
      <Layout>
        <ImageEditor
          ref={editorRef}
          includeUI={{
            // 기본사진 (최초 로딩 1회 있어야 작동 시작함)
            loadImage: {
              path: `http://localhost:3065/${performanceDetail.Image.src}`,
              name: "SampleImage",
            },
            theme: myTheme,
            menu: [
              // 넣고싶은 기능을 이 배열에서 없애거나 추가할 수 있습니다.
              // "resize",
              // "crop",
              "flip",
              "rotate",
              "draw",
              // "shape",
              "icon",
              "text",
              // "mask",
              "filter",
            ],
            // initMenu: "filter",
            uiSize: {
              width: "900px",
              height: "605px",
            },
            menuBarPosition: "top",
          }}
          cssMaxHeight={500}
          cssMaxWidth={700}
          selectionStyle={{
            cornerSize: 10,
            rotatingPointOffset: 70,
          }}
          usageStatistics={true}
        />
      </Layout>
      <button onClick={editorToBase64}>저장하기</button>

      {/* <img src={data} alt="" /> */}
    </>
  );
};

export default Decorate;
