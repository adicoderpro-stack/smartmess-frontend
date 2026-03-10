'use client'

import { Leaf, Users, TrendingUp, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { UserRole } from '@/lib/types'

interface SidebarProps {
  role: UserRole
  activeTab: string
  onTabChange: (tab: string) => void
  onLogout: () => void
}

export default function Sidebar({ role, activeTab, onTabChange, onLogout }: SidebarProps) {
  const getMenuItems = () => {
    switch (role) {
      case 'student':
        return [
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'statistics', label: 'My Statistics', icon: Leaf },
          { id: 'attendance', label: 'Meal Attendance', icon: Users },
          { id: 'history', label: 'History', icon: Users },
          { id: 'leaderboard', label: 'Leaderboard', icon: TrendingUp },
          { id: 'feedback', label: 'Meal Feedback', icon: Users },
        ]
      case 'manager':
        return [
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'attendance', label: 'Attendance', icon: Users },
          { id: 'waste', label: 'Daily Waste', icon: Leaf },
          { id: 'menu', label: 'Menu', icon: TrendingUp },
          { id: 'feedback', label: 'Feedback', icon: Users },
        ]
      case 'admin':
        return [
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'students', label: 'Students', icon: Users },
          { id: 'managers', label: 'Managers', icon: Users },
          { id: 'warnings', label: 'Warnings', icon: Leaf },
          { id: 'reports', label: 'Reports', icon: TrendingUp },
          { id: 'environmental', label: 'Environmental', icon: Leaf },
        ]
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-sidebar-foreground">Smartmess</h1>
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">{role} Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors',
              activeTab === id
                ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                : 'text-sidebar-foreground hover:bg-sidebar-accent'
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
