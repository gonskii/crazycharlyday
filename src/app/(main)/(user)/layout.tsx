import Header from "@/components/layout/header";

const AdminLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
  
    // TODO : hook isAdmin
  
    return ( 
      <div>
        <Header />
        <main className="flex-1 h-full overflow-y-auto">
          {children}
        </main>
      </div>
     );
  }
   
  export default AdminLayout;