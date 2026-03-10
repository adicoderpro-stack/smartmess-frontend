'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import StudentOverviewSection from '@/components/student/OverviewSection'
import StatisticsSection from '@/components/student/StatisticsSection'
import HistorySection from '@/components/student/HistorySection'
import LeaderboardSection from '@/components/student/LeaderboardSection'
import AttendanceSection from '@/components/student/AttendanceSection'
import FeedbackSection from '@/components/student/FeedbackSection'

interface StudentDashboardProps {
  onLogout: () => void
}

export default function StudentDashboard({ onLogout }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <StudentOverviewSection />
      case 'statistics':
        return <StatisticsSection />
      case 'attendance':
        return <AttendanceSection />
      case 'history':
        return <HistorySection />
      case 'leaderboard':
        return <LeaderboardSection />
      case 'feedback':
        return <FeedbackSection />
      default:
        return <StudentOverviewSection />
    }
  }

  return (
    <DashboardLayout
      role="student"
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={onLogout}
    >
      {renderContent()}
    </DashboardLayout>
  )
}
