'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { mockAttendance, mockAttendanceHistory, mockMealAttendanceStatus } from '@/lib/mockData'
import { Clock, CheckCircle } from 'lucide-react'

export default function AttendanceSection() {
  const [attendanceStatus, setAttendanceStatus] = useState(mockMealAttendanceStatus)
  const { toast } = useToast()
  const todayAttendance = mockAttendance.filter(a => a.date === '2024-03-09')

  const handleToggleAttendance = (mealType: string) => {
    setAttendanceStatus(prev =>
      prev.map(meal =>
        meal.mealType === mealType
          ? { ...meal, status: meal.status === 'open' ? 'closed' : 'open' }
          : meal
      )
    )
    const newStatus = attendanceStatus.find(m => m.mealType === mealType)?.status
    toast({
      title: `${mealType.charAt(0).toUpperCase() + mealType.slice(1)} attendance ${newStatus === 'open' ? 'closed' : 'opened'}!`,
      description: `Attendance for ${mealType} is now ${newStatus === 'open' ? 'closed' : 'open'}.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Attendance Management</h1>
        <p className="text-muted-foreground mt-2">Manage attendance for meals and track student participation</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Controls</CardTitle>
          <CardDescription>Open or close attendance for each meal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {attendanceStatus.map((meal) => (
              <div key={meal.mealType} className="p-4 border border-border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold capitalize">{meal.mealType}</h3>
                  <Badge variant="outline" className={
                    meal.status === 'open'
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : 'bg-muted text-muted-foreground'
                  }>
                    {meal.status === 'open' ? 'Open' : 'Closed'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">{meal.attendingCount}</span> / {meal.totalEligible} students attending
                  </p>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${(meal.attendingCount / meal.totalEligible) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((meal.attendingCount / meal.totalEligible) * 100)}% attendance rate
                  </p>
                </div>
                <Button
                  onClick={() => handleToggleAttendance(meal.mealType)}
                  className="w-full"
                  variant={meal.status === 'open' ? 'default' : 'outline'}
                >
                  {meal.status === 'open' ? 'Close Attendance' : 'Open Attendance'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
          <CardDescription>Current attendance for all meals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {todayAttendance.map((attendance) => (
            <div key={attendance.id}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium capitalize">{attendance.mealType}</p>
                <p className="text-sm text-muted-foreground">
                  {attendance.presentCount} / {attendance.totalStudents}
                </p>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-full rounded-full"
                  style={{ width: `${attendance.attendancePercentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {attendance.attendancePercentage.toFixed(1)}% attendance
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Trends</CardTitle>
          <CardDescription>Last 5 days average attendance by meal type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Date</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Breakfast</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Lunch</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Dinner</th>
                  <th className="px-6 py-3 text-left font-medium text-muted-foreground">Average</th>
                </tr>
              </thead>
              <tbody>
                {mockAttendanceHistory.map((entry, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">{entry.date}</td>
                    <td className="px-6 py-4">{entry.breakfast.toFixed(1)}%</td>
                    <td className="px-6 py-4">{entry.lunch.toFixed(1)}%</td>
                    <td className="px-6 py-4">{entry.dinner.toFixed(1)}%</td>
                    <td className="px-6 py-4 font-medium">{((entry.breakfast + entry.lunch + entry.dinner) / 3).toFixed(1)}%</td>
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
