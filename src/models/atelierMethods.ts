import connectDB from "@/app/utils/db";
import AtelierInterface from "./atelier";

export async function findAtelierById(id: number): Promise<AtelierInterface> {
  const conn = await connectDB();
  const retour = await conn?.query("SELECT * FROM Atelier WHERE id=?", [id]);
  conn?.release();
  return retour[0] as AtelierInterface;
}
export async function createAtelier(atelier: AtelierInterface): Promise<void> {
  const conn = await connectDB();
  await conn?.query(
    "INSERT INTO Atelier (titre,descritpion,date,nbPlace) value (?, ?, ?, ?)",
    [atelier.titre, atelier.descritpion, atelier.date, atelier.nbPlace]
  );
  conn?.release();
}

export async function updateAtelier(atelier: AtelierInterface): Promise<void> {
  const conn = await connectDB();
  const query = `UPDATE Atelier SET title = ?, descritpion = ?, date = ?, nbPlace = ? WHERE id = ?`;
  const params = [
    atelier.titre,
    atelier.descritpion,
    atelier.date,
    atelier.nbPlace,
    atelier.id,
  ];
  await conn?.query(query, params);
  conn?.release();
}
export async function deleteAtelierById(id:number):Promise<void> {
  const conn = await connectDB();
  await conn?.query("DELETE FROM Atelier WHERE id=?",[id]);
  conn?.release();
}
