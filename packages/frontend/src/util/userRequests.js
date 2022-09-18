export const userRequests = (state = undefined, data = undefined) => {
  const requests = {
    getUserTicket: `/user/ticket`,
    getUserProfile: `/user/image`,
    getUserNickName: `/user/profile/nickname`,
    postUserProfileImage: `/user/image`,
    patchUserProfileImage: `/user/profile/image`,
    patchUserProfileNickName: `/user/profile/nickname`,
  };

  return requests;
};
