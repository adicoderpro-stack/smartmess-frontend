import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatusBadge from '@/components/common/StatusBadge'
import { mockFoodWaste, mockHistoryData } from '@/lib/mockData'
import { AlertCircle, TrendingDown } from 'lucide-react'

export default function WasteSection() {
  const todayWaste = mockFoodWaste.filter(w => w.date === '2024-03-09')
  const yesterdayWaste = mockFoodWaste.filter(w => w.date === '2024-03-08')

  const todayTotal = todayWaste.reduce((sum, w) => sum + w.wasteInKg, 0)
  const yesterdayTotal = yesterdayWaste.reduce((sum, w) => sum + w.wasteInKg, 0)
  const trend = ((todayTotal - yesterdayTotal) / yesterdayTotal * 100).toFixed(1)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Daily Waste Monitor</h1>
        <p className="text-muted-foreground mt-2">Track and manage food waste across all meals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Today's Total Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{todayTotal.toFixed(1)} kg</p>
            <p className="text-xs text-muted-foreground mt-2">All meals combined</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">vs Yesterday</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-bold">{Math.abs(parseFloat(trend))}%</p>
              {parseFloat(trend) < 0 ? (
                <TrendingDown className="w-6 h-6 text-green-500" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-500" />
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {parseFloat(trend) < 0 ? 'Improvement' : 'Increase'}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Waste Per Student</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{(todayTotal / 260).toFixed(2)} kg</p>
            <p className="text-xs text-muted-foreground mt-2">Average per person</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Meal-wise Waste</CardTitle>
          <CardDescription>Waste breakdown by meal type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {todayWaste.map((waste) => (
            <div key={waste.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <p className="font-medium capitalize">{waste.mealType}</p>
                  <StatusBadge status={waste.status} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {waste.wasteInKg} kg | {waste.studentCount} students | {(waste.wasteInKg / waste.studentCount).toFixed(2)} kg/person
                </p>
              </div>
              <p className="text-2xl font-bold">{waste.wasteInKg} kg</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>7-Day Waste Trend</CardTitle>
          <CardDescription>Daily waste production over the last week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockHistoryData.map((entry) => {
              const total = entry.breakfast + entry.lunch + entry.dinner
              const maxWaste = 15
              return (
                <div key={entry.date}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">{entry.date}</p>
                    <p className="text-sm text-muted-foreground">{total.toFixed(1)} kg</p>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-destructive h-full rounded-full"
                      style={{ width: `${(total / maxWaste) * 100}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
