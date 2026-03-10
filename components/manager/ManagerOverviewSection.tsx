import StatCard from '@/components/common/StatCard'
import StatusBadge from '@/components/common/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Leaf, TrendingUp, AlertCircle } from 'lucide-react'
import { mockStudents, mockFoodWaste, mockAttendance } from '@/lib/mockData'

export default function ManagerOverviewSection() {
  const todayWaste = mockFoodWaste.filter(w => w.date === '2024-03-09').reduce((sum, w) => sum + w.wasteInKg, 0)
  const todayAttendance = mockAttendance.filter(a => a.date === '2024-03-09').reduce((sum, a) => sum + a.presentCount, 0)
  const averageWaste = (todayWaste / mockAttendance.filter(a => a.date === '2024-03-09').reduce((sum, a) => sum + a.presentCount, 0)).toFixed(2)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mess Manager Dashboard</h1>
        <p className="text-muted-foreground mt-2">Monitor operations, track waste, and manage student feedback</p>
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
          title="Today's Waste"
          value={`${todayWaste.toFixed(1)} kg`}
          icon={Leaf}
          color="destructive"
          subtext="All meals combined"
        />
        <StatCard
          title="Average per Student"
          value={`${averageWaste} kg`}
          icon={TrendingUp}
          color="accent"
          subtext="Today's average"
        />
        <StatCard
          title="Today's Attendance"
          value={todayAttendance}
          icon={Users}
          color="primary"
          subtext="Total meals served"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Operations Summary</CardTitle>
          <CardDescription>Overview of today's meals and waste status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { meal: 'Breakfast', students: 45, waste: 2.5 },
            { meal: 'Lunch', students: 120, waste: 6.8 },
            { meal: 'Dinner', students: 95, waste: 5.2 }
          ].map((meal) => {
            const perStudent = (meal.waste / meal.students).toFixed(2)
            let status: 'good' | 'moderate' | 'high' = 'moderate'
            if (parseFloat(perStudent) <= 0.04) status = 'good'
            else if (parseFloat(perStudent) > 0.07) status = 'high'

            return (
              <div key={meal.meal} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{meal.meal}</p>
                  <p className="text-sm text-muted-foreground">{meal.students} students | {meal.waste} kg waste | {perStudent} kg/person</p>
                </div>
                <StatusBadge status={status} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
