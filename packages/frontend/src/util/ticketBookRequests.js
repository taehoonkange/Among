export const ticketBookRequests = (state = undefined, data = undefined) => {
  const requests = {
    decorateTicket: `/ticketbook/${data}/coordinate`,
  };

  return requests;
};
