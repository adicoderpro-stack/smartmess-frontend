import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import StatusBadge from '@/components/common/StatusBadge'
import { AlertTriangle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function WarningsSection() {
  const studentsWithWarnings = [
    { id: '1', name: 'Rohan Patel', rollNumber: 'CS101', warnings: 6, reason: 'Excessive waste, Poor attendance' },
    { id: '2', name: 'Sanjay Kumar', rollNumber: 'ECE102', warnings: 5, reason: 'Frequent complaints, Behavioral issues' },
    { id: '3', name: 'Neha Singh', rollNumber: 'ME103', warnings: 8, reason: 'Multiple policy violations' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Warnings</h1>
        <p className="text-muted-foreground mt-2">Monitor and manage student behavior and compliance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">High Risk Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-destructive">{studentsWithWarnings.filter(s => s.warnings >= 5).length}</p>
            <p className="text-xs text-muted-foreground mt-2">5+ warnings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Warnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{studentsWithWarnings.reduce((sum, s) => sum + s.warnings, 0)}</p>
            <p className="text-xs text-muted-foreground mt-2">Issued this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Clear Record</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">97%</p>
            <p className="text-xs text-muted-foreground mt-2">Of students</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Students with Warnings</CardTitle>
          <CardDescription>Students who have received 5 or more warnings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {studentsWithWarnings.map((student) => (
            <div key={student.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-destructive">{student.warnings}</p>
                  <p className="text-xs text-muted-foreground">warnings</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{student.reason}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Send Warning</Button>
                <Button size="sm" variant="outline">Suspend</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
