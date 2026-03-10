'use client'

import { useState } from 'react'
import StudentDashboard from '@/components/dashboards/StudentDashboard'
import ManagerDashboard from '@/components/dashboards/ManagerDashboard'
import AdminDashboard from '@/components/dashboards/AdminDashboard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { UserRole } from '@/lib/types'
import { Leaf, Users, BarChart3 } from 'lucide-react'

export default function Home() {
  const [role, setRole] = useState<UserRole | null>(null)

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Smartmess</h1>
            </div>
            <p className="text-sm text-muted-foreground">Food Waste Management System</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl space-y-12">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Smart Waste Management
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track, monitor, and reduce food waste in your college mess with intelligent insights and sustainable practices
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Track Waste</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monitor daily food waste and identify patterns
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Engage Students</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Encourage sustainable eating habits with leaderboards
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Get Insights</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Analyze trends and generate comprehensive reports
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Selection */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">Select Your Role</h3>
                <p className="text-sm text-muted-foreground">Choose your dashboard to get started</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  onClick={() => setRole('student')}
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-primary hover:bg-primary/5"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Student</p>
                    <p className="text-xs text-muted-foreground mt-1">Track your waste</p>
                  </div>
                </Button>

                <Button
                  onClick={() => setRole('manager')}
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-accent hover:bg-accent/5"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Manager</p>
                    <p className="text-xs text-muted-foreground mt-1">Manage operations</p>
                  </div>
                </Button>

                <Button
                  onClick={() => setRole('admin')}
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center gap-3 border-2 hover:border-destructive hover:bg-destructive/5"
                >
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">Admin</p>
                    <p className="text-xs text-muted-foreground mt-1">System overview</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border mt-12">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
            <p>Smartmess - Making college messes smarter and more sustainable</p>
          </div>
        </footer>
      </div>
    )
  }

  const handleLogout = () => {
    setRole(null)
  }

  switch (role) {
    case 'student':
      return <StudentDashboard onLogout={handleLogout} />
    case 'manager':
      return <ManagerDashboard onLogout={handleLogout} />
    case 'admin':
      return <AdminDashboard onLogout={handleLogout} />
    default:
      return null
  }
}
