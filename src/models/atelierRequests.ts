import AtelierInterface from "./atelier";

export async function fetchGetAtelier(id: number) {
  return await fetch(`/api/atelier/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
}

export async function fetchPostAtelier(atelier: AtelierInterface) {
  await fetch("/api/atelier", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(atelier),
    cache: "no-store",
  });
}

export async function fetchPutAtelier(atelier: AtelierInterface) {
  await fetch("/api/atelier", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(atelier),
    cache: "no-store",
  });
}
export async function fetchDeleteAtelier(id: number) {
  await fetch(`/api/atelier/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
      cache: "no-store",
  });
}
export async function fetchGetAtelierDate(date:Date) {
  return await fetch(`/api/atelier/date/${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    cache: "no-store",
});
}

