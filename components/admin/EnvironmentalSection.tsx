import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatCard from '@/components/common/StatCard'
import { Leaf, Droplet, Cloud } from 'lucide-react'

export default function EnvironmentalSection() {
  // Calculate environmental cost of food waste
  // 1 kg food waste ≈ 10 litres of water used in production
  // 1 kg food waste ≈ 0.5 kg CO₂ emissions
  const foodWasteRecorded = 24.6 // kg
  const waterWasted = foodWasteRecorded * 10 // litres
  const co2Emitted = foodWasteRecorded * 0.5 // kg

  const metrics = {
    foodWasteRecorded,
    waterWasted,
    co2Emitted
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Environmental Impact</h1>
        <p className="text-muted-foreground mt-2">Track environmental cost of food waste recorded</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Food Waste Recorded"
          value={`${metrics.foodWasteRecorded} kg`}
          icon={Leaf}
          color="primary"
          subtext="Total recorded"
        />
        <StatCard
          title="Water Wasted"
          value={`${metrics.waterWasted.toFixed(0)} L`}
          icon={Droplet}
          color="primary"
          subtext="In production"
        />
        <StatCard
          title="CO₂ Emitted"
          value={`${metrics.co2Emitted.toFixed(1)} kg`}
          icon={Cloud}
          color="primary"
          subtext="Carbon footprint"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Environmental Cost Tracking</CardTitle>
            <CardDescription>Monitor cumulative environmental impact of food waste</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { metric: 'Food Waste', current: metrics.foodWasteRecorded, unit: 'kg' },
              { metric: 'Water Wasted', current: metrics.waterWasted, unit: 'L' },
              { metric: 'CO₂ Emitted', current: metrics.co2Emitted, unit: 'kg' },
            ].map((item) => (
              <div key={item.metric}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{item.metric}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.current.toFixed(1)} {item.unit}
                  </p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-destructive h-full rounded-full"
                    style={{ width: `${Math.min(((item.current / (item.metric === 'Food Waste' ? 50 : item.metric === 'Water Wasted' ? 500 : 25)) * 100), 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Summary</CardTitle>
            <CardDescription>Environmental impact of recorded food waste</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Food Waste Recorded</p>
              <p className="text-2xl font-bold text-red-700 dark:text-red-300 mt-2">
                {metrics.foodWasteRecorded} kg
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Water Wasted in Production</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mt-2">
                {metrics.waterWasted.toFixed(0)} L
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-300">CO₂ Footprint</p>
              <p className="text-2xl font-bold text-orange-700 dark:text-orange-300 mt-2">
                {metrics.co2Emitted.toFixed(1)} kg
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
