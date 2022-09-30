import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { deletePostServer } from "../actions/post";

const MySwal = withReactContent(Swal);

const ConfirmModal = ({ setDeletePost, id }) => {
  const dispatcher = useDispatch();

  MySwal.fire({
    title: "정말 삭제하시겠어요?",
    text: "게시글이 삭제되면 복구할 수 없어요.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "네, 삭제하겠습니다!",
    cancelButtonText: "취소",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      dispatcher(deletePostServer({ id: id }));
      MySwal.fire(
        "게시글이 삭제되었습니다!",
        "Your file has been deleted.",
        "success",
      ).then(() => {
        window.location.reload();
        setDeletePost(false);
      });
    } else {
      setDeletePost(false);
    }
  });
};

export default ConfirmModal;
