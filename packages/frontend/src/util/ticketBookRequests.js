export const ticketBookRequests = (state = undefined, data = undefined) => {
  const requests = {
    decorateTicket: `/ticketbook/${data}/coordinate`,
    getTicketBook: `/ticketbook/tickets`,
  };

  return requests;
};
