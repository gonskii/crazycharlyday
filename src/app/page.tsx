"use client";
import { fetchGetReservation } from "@/models/reservationRequests";
import { fetchGetUser } from "@/models/userRequests";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page(): JSX.Element {

  const router = useRouter();

  router.replace("/dashboard");
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      loading ...
    </div>
  );
}
