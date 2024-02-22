import AtelierPreview from '@/components/ui/atelier-preview';


const draftAteliers = {
    a : {
        date: "10/10",
        title: "Atelier 1",
        description: "Description atelier 1",
        href: "/atelier/1"
    },
    
}
const NextActivities = () => {
    return ( 
        <div className="flex flex-col p-24 gap-y-12">
          <h2 className="font-archivoBlack text-4xl"> Les prochains ateliers</h2>
          <AtelierPreview 
            date={draftAteliers.a.date}
            title={draftAteliers.a.title}
            description={draftAteliers.a.description}
            href={draftAteliers.a.href}
          />  
        </div>
     );
}
 
export default NextActivities;