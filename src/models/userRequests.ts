import UserInterface from "./user";

export async function fetchGetUser(email:string) {
    return await fetch(`/api/user/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
}

export async function fetchPostUser(user:UserInterface) {
    await fetch("/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        cache: "no-store",
    });
}

export async function fetchPutUser(user:UserInterface) {
    await fetch("/api/user", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        cache: "no-store",
    });
}

export async function fetchDeleteUser(email:string) {
    await fetch(`/api/user/${email}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
}
export async function fetchGetUserByAtelier(idAtelier:number) {
    return await fetch(`/api/reservation/user/${idAtelier}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
}