import ReservationInterface from "./reservation";

export async function fetchGetReservation(idUser: number, idAtelier: number) {
  return await fetch(`/api/reservation/${idUser}&${idAtelier}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
}

export async function fetchPostReservation(res: ReservationInterface) {
  await fetch("/api/reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
    cache: "no-store",
  });
}

export async function fetchPutReservation(res: ReservationInterface) {
  await fetch("/api/reservation", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(res),
    cache: "no-store",
  });
}
export async function fetchDeleteUser(idUser: number, idAtelier: number) {
  await fetch(`/api/reservation/${idUser}&${idAtelier}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
      cache: "no-store",
  });
}