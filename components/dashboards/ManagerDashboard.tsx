'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import ManagerOverviewSection from '@/components/manager/ManagerOverviewSection'
import AttendanceSection from '@/components/manager/AttendanceSection'
import WasteSection from '@/components/manager/WasteSection'
import MenuSection from '@/components/manager/MenuSection'
import FeedbackAnalyticsSection from '@/components/manager/FeedbackAnalyticsSection'

interface ManagerDashboardProps {
  onLogout: () => void
}

export default function ManagerDashboard({ onLogout }: ManagerDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ManagerOverviewSection />
      case 'attendance':
        return <AttendanceSection />
      case 'waste':
        return <WasteSection />
      case 'menu':
        return <MenuSection />
      case 'feedback':
        return <FeedbackAnalyticsSection />
      default:
        return <ManagerOverviewSection />
    }
  }

  return (
    <DashboardLayout
      role="manager"
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={onLogout}
    >
      {renderContent()}
    </DashboardLayout>
  )
}
