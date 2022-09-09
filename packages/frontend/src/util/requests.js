export const requests = (state, data = undefined) => {
  const requests1 = {
    getPosts: `community/${state?.posts.NowCommunityId}/${
      state?.posts.communityCategory
    }/${100}/posts`,
    getInfluencerPosts: `community/${state?.posts.NowCommunityId}/${100}/posts`,
    setPost: `community/${state?.posts.NowCommunityId}/post`,
    setComment: `/community/${data?.id}/comment`,
    setReply: `/community/${data?.refId}/refcomment`,
    getPostDetail: `/community/${data?.postId}/post`,
  };

  return requests1;
};
