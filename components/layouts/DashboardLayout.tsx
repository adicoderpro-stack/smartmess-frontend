'use client'

import Sidebar from './Sidebar'
import type { UserRole } from '@/lib/types'

interface DashboardLayoutProps {
  role: UserRole
  activeTab: string
  onTabChange: (tab: string) => void
  onLogout: () => void
  children: React.ReactNode
}

export default function DashboardLayout({
  role,
  activeTab,
  onTabChange,
  onLogout,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        role={role}
        activeTab={activeTab}
        onTabChange={onTabChange}
        onLogout={onLogout}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
