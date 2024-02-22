import AtelierPreview from "@/components/ui/atelier-preview";

const draftAteliers = {
    a : {
        date: "10/10",
        title: "Atelier 1",
        description: "Description atelier 1",
        href: "/atelier/1"
    },
    
}

const UserReservations = () => {
    return ( 
        <>
            <div className="flex flex-col gap-y-24 py-24 justify-center items-center ">
                <h1 className="font-bold font-archivoBlack text-3xl "> Mes réservations </h1>
     <AtelierPreview 
                
            date={draftAteliers.a.date}
            title={draftAteliers.a.title}
            description={draftAteliers.a.description}
            href={draftAteliers.a.href}
          />  
           
            </div>
            a
        </>
     );
}
 
export default UserReservations;