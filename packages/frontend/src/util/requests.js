export const requests = (state = undefined, data = undefined) => {
  const requests1 = {
    getUserProfile: `/user/image`,
    getUserNickName: `/user/profile/nickname`,
    postUserProfileImage: `/user/image`,
    patchUserProfileImage: `/user/profile/image`,
    patchUserProfileNickName: `/user/profile/nickname`,
    getPosts: `community/${state?.posts.NowCommunityId}/${
      state?.posts.communityCategory
    }/${100}/posts`,
    getInfluencerPosts: `community/${state?.posts.NowCommunityId}/${100}/posts`,
    setPost: `community/${state?.posts.NowCommunityId}/post`,
    setComment: `/community/${data?.id}/comment`,
    setReply: `/community/${data?.refId}/refcomment`,
    getPostDetail: `/community/${data?.postId}/post`,
    performanceImage: `/performance/image`,
    performance: `/performance`,
    performanceSeats: `/performance/1/seatgui`,
    getSearchPerformance: `/performance/${data}/search`,
    getPerformance: `/performance`,
    getPerformanceDetail: `/performance/${data}/detail`,
    getSeatsData: `/performance/${data}/seatgui`,
    postTicketBuy: `/ticket/buy`,
  };

  return requests1;
};
