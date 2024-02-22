import connectDB from "@/app/utils/db";
import ReservationInterface from "./reservation";


export async function findReservationByIds(idUser:number,idAtelier:number):Promise<ReservationInterface> {
    const conn = await connectDB();
    const retour = await conn?.query("SELECT * FROM Reservation WHERE idUser=? AND idAtelier=?",[idUser, idAtelier]);
    conn?.release();
    console.log("on passe ici")
    return retour[0] as ReservationInterface;
}
export async function createReservation(res:ReservationInterface):Promise<void> {
    const conn = await connectDB();
    const userExist = await conn?.query("SELECT count(date) as count FROM Reservation WHERE idUser = ? AND idAtelier = ?",[res.idUser, res.idAtelier]) as [{count:number}];
    const bool = userExist[0].count==0;
    if(bool){
        await conn?.query("INSERT INTO Reservation (idUser,idAtelier,date,listeAttente) value (?, ?, ?, ?)", [res.idUser, res.idAtelier, res.date, res.listeAttente]);
    }
    conn?.release();
}

export async function updateReservation(res:ReservationInterface):Promise<void> {
    const conn = await connectDB();
    const query = `UPDATE Reservation SET date = ?, listeAttente = ? WHERE idUser = ? AND idAtelier = ?`;
    const params = [res.date, res.listeAttente, res.idUser, res.idAtelier];
    await conn?.query(query, params);
    conn?.release();
}
export async function deleteReservationByIds(idUser:number,idAtelier:number):Promise<void> {
    const conn = await connectDB();
    await conn?.query("DELETE FROM Reservation WHERE idUser=? AND idAtelier=?",[idUser,idAtelier]);
    conn?.release();
}