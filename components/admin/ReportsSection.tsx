'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Download, FileText } from 'lucide-react'

export default function ReportsSection() {
  const { toast } = useToast()

  const handleExport = (format: string) => {
    toast({
      title: `Exporting as ${format.toUpperCase()}`,
      description: `Report is being prepared for download.`,
    })
  }

  const reports = [
    {
      id: '1',
      name: 'Monthly Waste Report',
      description: 'Comprehensive waste production and reduction metrics',
      date: '2024-03-09',
      size: '2.4 MB'
    },
    {
      id: '2',
      name: 'Student Attendance Analysis',
      description: 'Detailed attendance patterns and trends',
      date: '2024-03-08',
      size: '1.8 MB'
    },
    {
      id: '3',
      name: 'Environmental Cost Report',
      description: 'Food waste, CO₂ emissions, and environmental impact analysis',
      date: '2024-03-07',
      size: '3.1 MB'
    },
    {
      id: '4',
      name: 'Feedback Summary',
      description: 'Student feedback analysis and satisfaction scores',
      date: '2024-03-06',
      size: '1.5 MB'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports & Exports</h1>
        <p className="text-muted-foreground mt-2">Generate and download comprehensive system reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Export Options</CardTitle>
          <CardDescription>Choose your preferred export format</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button
              onClick={() => handleExport('CSV')}
              className="gap-2"
              variant="outline"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
            <Button
              onClick={() => handleExport('PDF')}
              className="gap-2"
              variant="outline"
            >
              <FileText className="w-4 h-4" />
              Export PDF
            </Button>
            <Button
              onClick={() => handleExport('Excel')}
              className="gap-2"
              variant="outline"
            >
              <Download className="w-4 h-4" />
              Export Excel
            </Button>
            <Button
              onClick={() => handleExport('JSON')}
              className="gap-2"
              variant="outline"
            >
              <Download className="w-4 h-4" />
              Export JSON
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Recent reports ready for download</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {reports.map((report) => (
            <div key={report.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-medium">{report.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scheduled Reports</CardTitle>
          <CardDescription>Automatic report generation schedule</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { report: 'Daily Summary', schedule: 'Every day at 10:00 AM', next: '2024-03-10 at 10:00 AM' },
            { report: 'Weekly Report', schedule: 'Every Monday at 9:00 AM', next: '2024-03-11 at 9:00 AM' },
            { report: 'Monthly Report', schedule: 'First day of month at 12:00 AM', next: '2024-04-01 at 12:00 AM' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">{item.report}</p>
                <p className="text-sm text-muted-foreground">{item.schedule}</p>
                <p className="text-xs text-muted-foreground mt-1">Next: {item.next}</p>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
