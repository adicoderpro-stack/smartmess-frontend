import StatCard from '@/components/common/StatCard'
import StatusBadge from '@/components/common/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf, Users, TrendingUp, Zap } from 'lucide-react'
import { mockStudentStats } from '@/lib/mockData'

export default function StudentOverviewSection() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Aarav</h1>
        <p className="text-muted-foreground mt-2">Track your food waste contribution and sustainability impact</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Waste Produced"
          value={`${mockStudentStats.totalWaste.toFixed(1)} kg`}
          icon={Leaf}
          color="destructive"
          subtext="Across all meals"
        />
        <StatCard
          title="Average per Meal"
          value={`${mockStudentStats.averageWastePerMeal.toFixed(2)} kg`}
          icon={TrendingUp}
          color="default"
          subtext="Last 30 days"
        />
        <StatCard
          title="Meal Attendance"
          value={`${mockStudentStats.attendanceRate.toFixed(1)}%`}
          icon={Users}
          color="primary"
          subtext={`${mockStudentStats.mealsAttended}/${mockStudentStats.totalMeals} meals`}
        />
        <StatCard
          title="Waste Status"
          value={mockStudentStats.wasteStatus === 'good' ? 'Excellent' : 'Good'}
          icon={Zap}
          color="primary"
          subtext="Keep it up!"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Waste Status</CardTitle>
          <CardDescription>Your current standing in sustainability metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Overall Waste Production</p>
                <p className="text-sm text-muted-foreground">Compared to average: 15% below average (Great!)</p>
              </div>
              <StatusBadge status="good" label="Below Average" />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Attendance Consistency</p>
                <p className="text-sm text-muted-foreground">You attend 76% of available meals</p>
              </div>
              <StatusBadge status="moderate" label="Good" />
            </div>
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">Recent Trend</p>
                <p className="text-sm text-muted-foreground">Waste trending downward (Positive!)</p>
              </div>
              <StatusBadge status="good" label="Improving" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
