export const ticketResellRequests = (state = undefined, data = undefined) => {
  const requests = {
    ticketSalesRegistration: `/ticket/${data?.price}/${data?.ticketId}/register`,
  };

  return requests;
};
