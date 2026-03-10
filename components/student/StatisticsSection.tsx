import StatCard from '@/components/common/StatCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf, Target, TrendingDown, Award } from 'lucide-react'
import { mockStudentStats } from '@/lib/mockData'

export default function StatisticsSection() {
  const wasteReduction = 20
  const co2Saved = 12.3
  const points = 950

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Statistics</h1>
        <p className="text-muted-foreground mt-2">Detailed breakdown of your sustainability metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Waste Reduction"
          value={`${wasteReduction}%`}
          icon={TrendingDown}
          color="primary"
          subtext="vs last month"
        />
        <StatCard
          title="CO₂ Saved"
          value={`${co2Saved} kg`}
          icon={Leaf}
          color="primary"
          subtext="Equivalent to planting 1 tree"
        />
        <StatCard
          title="Leaderboard Points"
          value={points}
          icon={Award}
          color="accent"
          subtext="Rank #1 in your batch"
        />
        <StatCard
          title="Meals Analyzed"
          value={mockStudentStats.totalMeals}
          icon={Target}
          color="default"
          subtext="In the last 30 days"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Breakdown</CardTitle>
            <CardDescription>Average waste per meal type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { meal: 'Breakfast', waste: 0.8, avg: 1.2 },
                { meal: 'Lunch', waste: 2.1, avg: 3.5 },
                { meal: 'Dinner', waste: 1.6, avg: 2.8 }
              ].map((item) => (
                <div key={item.meal}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">{item.meal}</p>
                    <p className="text-sm text-muted-foreground">{item.waste} kg / {item.avg} kg avg</p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${(item.waste / item.avg) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Environmental Impact</CardTitle>
            <CardDescription>Cost of your food waste</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm font-medium text-red-700 dark:text-red-300">Food Waste Produced</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300 mt-1">24.6 kg</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Water Wasted</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mt-1">246 L</p>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <p className="text-sm font-medium text-orange-700 dark:text-orange-300">CO₂ Emissions</p>
                <p className="text-2xl font-bold text-orange-700 dark:text-orange-300 mt-1">12.3 kg</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
