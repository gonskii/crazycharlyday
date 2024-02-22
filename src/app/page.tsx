"use client";
import { fetchGetReservation } from "@/models/reservationRequests";
import { fetchGetUser } from "@/models/userRequests";
import { useEffect } from "react";

export default function Page(): JSX.Element {

async function handleClick() {
	await fetchGetReservation(1,1);
}
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <button type="button" onClick={handleClick}> click to test</button>
    </div>
  );
}
