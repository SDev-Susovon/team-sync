import MainLayout from "@/src/components/layouts/main-layout";
import { Activity, Users, Clock, TrendingUp } from "lucide-react";

export default function DashboardPage() {
    return (
        <MainLayout>
            <div className="flex-1 space-y-4 p-8 pt-6 ml-2">  
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                            <p className="text-muted-foreground mt-2">
                                Welcome back! Here what happening with your team today.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Date picker or other controls would go here */}
                        </div>
                    </div>

                    {/* Stats Cards Grid */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard
                            title="Active Projects"
                            value="12"
                            icon={<Activity className="h-4 w-4" />}
                            trend="+2 from last week"
                        />
                        <StatCard
                            title="Team Members"
                            value="24"
                            icon={<Users className="h-4 w-4" />}
                            trend="+3 new hires"
                        />
                        <StatCard
                            title="Pending Tasks"
                            value="18"
                            icon={<Clock className="h-4 w-4" />}
                            trend="5 overdue"
                        />
                        <StatCard
                            title="Productivity"
                            value="89%"
                            icon={<TrendingUp className="h-4 w-4" />}
                            trend="+5% from last month"
                        />
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        {/* Project Timeline Card */}
                        <div className="bg-card rounded-lg border shadow-sm p-6 col-span-4">
                            <h2 className="text-lg font-semibold mb-4">Project Timeline</h2>
                            <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-lg">
                                <p className="text-muted-foreground">Timeline visualization</p>
                            </div>
                        </div>

                        {/* Recent Activity Card */}
                        <div className="bg-card rounded-lg border shadow-sm p-6 col-span-3">
                            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <ActivityItem
                                        key={item}
                                        title="Team update"
                                        description="New tasks assigned to your team"
                                        time="2h ago"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

// Stat Card Component
function StatCard({ title, value, icon, trend }: {
    title: string;
    value: string;
    icon: React.ReactNode;
    trend: string;
}) {
    return (
        <div className="bg-card rounded-lg border shadow-sm p-6">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">{title}</h3>
                <span className="text-muted-foreground">{icon}</span>
            </div>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground mt-1">{trend}</p>
        </div>
    );
}

// Activity Item Component
function ActivityItem({ title, description, time }: {
    title: string;
    description: string;
    time: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 bg-muted rounded-full p-2">
                <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <p className="text-xs text-muted-foreground">{time}</p>
        </div>
    );
}