'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import AdminOverviewSection from '@/components/admin/AdminOverviewSection'
import StudentManagementSection from '@/components/admin/StudentManagementSection'
import WarningsSection from '@/components/admin/WarningsSection'
import EnvironmentalSection from '@/components/admin/EnvironmentalSection'
import ReportsSection from '@/components/admin/ReportsSection'

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverviewSection />
      case 'students':
        return <StudentManagementSection />
      case 'warnings':
        return <WarningsSection />
      case 'environmental':
        return <EnvironmentalSection />
      case 'reports':
        return <ReportsSection />
      default:
        return <AdminOverviewSection />
    }
  }

  return (
    <DashboardLayout
      role="admin"
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={onLogout}
    >
      {renderContent()}
    </DashboardLayout>
  )
}
