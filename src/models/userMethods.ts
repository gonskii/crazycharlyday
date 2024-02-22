import connectDB from "@/app/utils/db";
import UserInterface from "./user";

export async function findUserByEmail(email:string):Promise<UserInterface> {
    const conn = await connectDB();
    const retour = await conn?.query("SELECT * FROM User WHERE email=?",[email]);
    conn?.release();
    return retour[0] as UserInterface;
}
export async function createUser(user:UserInterface):Promise<void> {
    const conn = await connectDB();
    const userExist = await conn?.query("SELECT count(email) as count FROM User WHERE email = ?",[user.email]) as [{count:number}];
    const bool = userExist[0].count==0;
    if(bool){
        await conn?.query("INSERT INTO User (email,password,nom,prenom,role,temporaire) value (?, ?, ?, ?, ?, ?)", [user.email, user.password, user.nom, user.prenom, user.role, user.temporaire]);
    }
    conn?.release();
}
export async function updateUser(user:UserInterface):Promise<void> {
    const conn = await connectDB();
    const query = `UPDATE User SET email = ?, password = ?, nom = ?, prenom = ?, role = ?, temporaire = ? WHERE email = ?`;
    const params = [user.email, user.password, user.nom, user.prenom, user.role, user.temporaire, user.email];
    await conn?.query(query, params);
    conn?.release();
}
export async function deleteUserByEmail(email:string):Promise<void> {
    const conn = await connectDB();
    await conn?.query("DELETE FROM User WHERE email=?",[email]);
    conn?.release();
}
export async function findUserByAtelier(idAtelier:number):Promise<UserInterface[]> {
    const conn = await connectDB();
    const retour:UserInterface[] = [];
    const res = await conn?.query("SELECT idUser FROM Reservation WHERE idAtelier=?",[idAtelier]) as [number];
    for(const id of res){
        const u = await findUserById(id);
        retour.push(u);
    }
    conn?.release();
    return retour;
}
export async function findUserById(id:number):Promise<UserInterface> {
    const conn = await connectDB();
    const retour = await conn?.query("SELECT * FROM User WHERE id=?",[id]);
    conn?.release();
    return retour[0] as UserInterface;
}