import StatCard from '@/components/common/StatCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Leaf, TrendingDown, Zap } from 'lucide-react'
import { mockStudents } from '@/lib/mockData'

export default function AdminOverviewSection() {
  const totalManagers = 3
  const avgWastePerDay = 14.2
  const attendanceRate = 74.5

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">System overview and comprehensive analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value={mockStudents.length}
          icon={Users}
          color="primary"
          subtext="Active members"
        />
        <StatCard
          title="Total Managers"
          value={totalManagers}
          icon={Users}
          color="accent"
          subtext="Mess staff"
        />
        <StatCard
          title="Average Daily Waste"
          value={`${avgWastePerDay} kg`}
          icon={Leaf}
          color="destructive"
          subtext="Per day average"
        />
        <StatCard
          title="Overall Attendance"
          value={`${attendanceRate}%`}
          icon={Zap}
          color="primary"
          subtext="Across all meals"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Health</CardTitle>
          <CardDescription>Overall system performance metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-700 dark:text-green-300">System Status</p>
              <p className="text-lg font-bold text-green-700 dark:text-green-300 mt-2">Operational</p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Active Sessions</p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300 mt-2">8 users</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">Pending Issues</p>
              <p className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mt-2">3 warnings</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
