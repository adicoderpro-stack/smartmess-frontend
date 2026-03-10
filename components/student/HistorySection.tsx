import DataTable from '@/components/common/DataTable'
import StatusBadge from '@/components/common/StatusBadge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { mockHistoryData } from '@/lib/mockData'

interface HistoryEntry {
  date: string
  breakfast: number
  lunch: number
  dinner: number
}

export default function HistorySection() {
  const columns = [
    { key: 'date' as const, label: 'Date' },
    {
      key: 'breakfast' as const,
      label: 'Breakfast (kg)',
      render: (value: number) => value.toFixed(1)
    },
    {
      key: 'lunch' as const,
      label: 'Lunch (kg)',
      render: (value: number) => value.toFixed(1)
    },
    {
      key: 'dinner' as const,
      label: 'Dinner (kg)',
      render: (value: number) => value.toFixed(1)
    },
    {
      key: 'breakfast' as const,
      label: 'Total (kg)',
      render: (_: number, item: HistoryEntry) => {
        const total = item.breakfast + item.lunch + item.dinner
        return total.toFixed(1)
      }
    },
    {
      key: 'breakfast' as const,
      label: 'Status',
      render: (_: number, item: HistoryEntry) => {
        const total = item.breakfast + item.lunch + item.dinner
        let status: 'good' | 'moderate' | 'high' = 'moderate'
        if (total <= 3.5) status = 'good'
        else if (total > 5.5) status = 'high'
        return <StatusBadge status={status} />
      }
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Waste History</h1>
        <p className="text-muted-foreground mt-2">Track your waste production over time</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daily Waste Log</CardTitle>
          <CardDescription>Last 5 days of waste production by meal type</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  {columns.map((col) => (
                    <th key={String(col.key)} className="px-6 py-3 text-left font-medium text-muted-foreground">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mockHistoryData.map((entry, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">{entry.date}</td>
                    <td className="px-6 py-4">{entry.breakfast.toFixed(1)}</td>
                    <td className="px-6 py-4">{entry.lunch.toFixed(1)}</td>
                    <td className="px-6 py-4">{entry.dinner.toFixed(1)}</td>
                    <td className="px-6 py-4 font-medium">{(entry.breakfast + entry.lunch + entry.dinner).toFixed(1)}</td>
                    <td className="px-6 py-4">
                      {(() => {
                        const total = entry.breakfast + entry.lunch + entry.dinner
                        let status: 'good' | 'moderate' | 'high' = 'moderate'
                        if (total <= 3.5) status = 'good'
                        else if (total > 5.5) status = 'high'
                        return <StatusBadge status={status} />
                      })()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
