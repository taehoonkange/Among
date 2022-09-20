export const ticketResellRequests = (state = undefined, data = undefined) => {
  const requests = {
    ticketSalesRegistration: `/ticket/${data?.price}/${data?.ticketId}/register`,
    ticketInfo: `/ticket/${data}/detail`, // 티켓의 데이터 정보를 받아오는 요청
    patchResellTicket: `/ticket/${data.price}/${data.ticketID}/register`,
  };

  return requests;
};
