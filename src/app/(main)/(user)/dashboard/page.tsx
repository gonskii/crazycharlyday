import DashboardCards from "./_components/dashboard-cards";
import NextActivities from "./_components/next-activities";

const UserDashboard = () => {
  return (
    <div className="flex flex-row">
      <DashboardCards />
      <div className="bg-zinc-400 ">
      </div>
      {/* Barre verticale grise */}
      <NextActivities />
    </div>
  );
};

export default UserDashboard;