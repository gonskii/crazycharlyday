import { deleteReservationByIds, findReservationByIds } from "@/models/reservationMethods";
import { NextResponse } from "next/server";

export async function GET(request: Request,{ params }: { params: { ids: string } }) {
    try {
        let res;
      const {ids} = params;
      const tab = ids.split("&");
      if(tab.length==2)
         res = await findReservationByIds(Number(tab[0]),Number(tab[1]));
      return NextResponse.json({ reservation:  JSON.stringify(res)});
    } catch (error) {
      return NextResponse.error();
    }
  }

  export async function DELETE(request: Request,
    { params }: { params: { ids: string } }) {
    try {
      let res;
      const {ids} = params;
      const tab = ids.split("&");
      if(tab.length==2)
         res = await deleteReservationByIds(Number(tab[0]),Number(tab[1]));
      return NextResponse.json({ status: 201 });
    } catch (error) {
      return NextResponse.error();
    }
  }