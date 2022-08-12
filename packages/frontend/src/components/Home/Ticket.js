import React from "react";
import styled from "styled-components";
import ticket1 from "../../images/ticketImg1.png";
import ticket2 from "../../images/ticketImg2.png";
import ticket3 from "../../images/ticketImg3.png";
import ticket4 from "../../images/ticketImg4.png";
import ticket5 from "../../images/ticketImg5.png";

const Ticket = () => {
  const TicketContainer = styled.ul`
    margin-top: 40px;
    overflow: hidden;
    font-size: 0px;
    min-height: 177px;
    white-space: nowrap;
    padding: 0px;
  `;

  const TicketImg = styled.img`
    width: 124px;
    margin-right: 8px;
  `;
  return (
    <div className="Tickets" style={{ overflow: "hidden" }}>
      <TicketContainer>
        <TicketImg src={ticket1} alt=""></TicketImg>
        <TicketImg src={ticket2} alt=""></TicketImg>
        <TicketImg src={ticket3} alt=""></TicketImg>
        <TicketImg src={ticket4} alt=""></TicketImg>
        <TicketImg src={ticket5} alt=""></TicketImg>
        <TicketImg src={ticket1} alt=""></TicketImg>
        <TicketImg src={ticket2} alt=""></TicketImg>
        <TicketImg src={ticket3} alt=""></TicketImg>
        <TicketImg src={ticket5} alt=""></TicketImg>
        <TicketImg src={ticket4} alt=""></TicketImg>
        <TicketImg src={ticket4} alt=""></TicketImg>
        <TicketImg src={ticket3} alt=""></TicketImg>
        <TicketImg src={ticket2} alt=""></TicketImg>
        <TicketImg src={ticket1} alt=""></TicketImg>
        <TicketImg src={ticket5} alt=""></TicketImg>
        <TicketImg src={ticket2} alt=""></TicketImg>
        <div className="Ticket">
          <TicketImg src="images/ticketImg5.png" alt=""></TicketImg>
        </div>
      </TicketContainer>
    </div>
  );
};

export default Ticket;
