'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { mockMealAttendanceStatus, mockStudentMealAttendance } from '@/lib/mockData'
import { Badge } from '@/components/ui/badge'
import { Clock, CheckCircle, XCircle } from 'lucide-react'

export default function AttendanceSection() {
  const [attendance, setAttendance] = useState(mockStudentMealAttendance)
  const { toast } = useToast()

  const handleAttendanceSubmit = (mealType: string, status: 'coming' | 'not-coming') => {
    setAttendance(prev =>
      prev.map(item =>
        item.mealType === mealType
          ? { ...item, status: status as any, submittedAt: new Date().toLocaleString() }
          : item
      )
    )
    toast({
      title: 'Attendance submitted!',
      description: `You marked ${mealType} as ${status === 'coming' ? 'coming' : 'not coming'}`,
    })
  }

  const getMealStatusIcon = (status: string) => {
    if (status === 'coming') return <CheckCircle className="w-5 h-5 text-primary" />
    if (status === 'not-coming') return <XCircle className="w-5 h-5 text-destructive" />
    return <Clock className="w-5 h-5 text-muted-foreground" />
  }

  const getMealStatusText = (status: string) => {
    if (status === 'coming') return 'Coming'
    if (status === 'not-coming') return 'Not Coming'
    return 'Not Submitted'
  }

  const getMealStatusColor = (status: string) => {
    if (status === 'coming') return 'bg-primary/10 text-primary border-primary/30'
    if (status === 'not-coming') return 'bg-destructive/10 text-destructive border-destructive/30'
    return 'bg-muted text-muted-foreground border-border'
  }

  const getAttendanceStatusOpen = (mealType: string) => {
    const mealStatus = mockMealAttendanceStatus.find(m => m.mealType === mealType)
    return mealStatus?.status === 'open'
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meal Attendance</h1>
        <p className="text-muted-foreground mt-2">Submit your meal attendance for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['breakfast', 'lunch', 'dinner'].map((meal) => {
          const mealAttendance = attendance.find(a => a.mealType === meal as any)
          const isOpen = getAttendanceStatusOpen(meal)
          const mealLabel = meal.charAt(0).toUpperCase() + meal.slice(1)

          return (
            <Card key={meal} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{mealLabel}</CardTitle>
                  <Badge variant="outline" className={isOpen ? 'bg-primary/10 text-primary border-primary/30' : 'bg-muted text-muted-foreground'}>
                    {isOpen ? 'Open' : 'Closed'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {mealAttendance && (
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    {getMealStatusIcon(mealAttendance.status)}
                    <div>
                      <p className="text-sm font-medium">{getMealStatusText(mealAttendance.status)}</p>
                      {mealAttendance.submittedAt && (
                        <p className="text-xs text-muted-foreground">{mealAttendance.submittedAt}</p>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {isOpen ? (
                    <>
                      <Button
                        onClick={() => handleAttendanceSubmit(meal, 'coming')}
                        className="w-full"
                        variant={mealAttendance?.status === 'coming' ? 'default' : 'outline'}
                      >
                        Coming
                      </Button>
                      <Button
                        onClick={() => handleAttendanceSubmit(meal, 'not-coming')}
                        className="w-full"
                        variant={mealAttendance?.status === 'not-coming' ? 'destructive' : 'outline'}
                      >
                        Not Coming
                      </Button>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      Attendance is closed for this meal
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Meal Attendance Overview</CardTitle>
          <CardDescription>Current attendance statistics for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockMealAttendanceStatus.map((meal) => (
              <div key={meal.mealType} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium capitalize">{meal.mealType}</p>
                  <p className="text-sm text-muted-foreground">
                    {meal.attendingCount} / {meal.totalEligible} students attending
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{Math.round((meal.attendingCount / meal.totalEligible) * 100)}%</p>
                  <p className="text-xs text-muted-foreground">Attendance rate</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
