export type UserRole = 'student' | 'manager' | 'admin'
export type MealType = 'breakfast' | 'lunch' | 'dinner'
export type AttendanceStatus = 'coming' | 'not-coming' | 'not-submitted'

export interface Student {
  id: string
  name: string
  rollNumber: string
  email: string
  mealPlan: 'standard' | 'premium'
  joinDate: string
}

export interface FoodWaste {
  id: string
  date: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  wasteInKg: number
  status: 'good' | 'moderate' | 'high'
  studentCount: number
}

export interface Attendance {
  id: string
  date: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  presentCount: number
  totalStudents: number
  attendancePercentage: number
}

export interface Menu {
  id: string
  date: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  items: string[]
  cuisine: string
}

export interface MealAttendanceStatus {
  mealType: MealType
  status: 'open' | 'closed'
  attendingCount: number
  totalEligible: number
}

export interface StudentMealAttendance {
  mealType: MealType
  date: string
  status: AttendanceStatus
  submittedAt?: string
}

export interface MealFeedbackItem {
  id: string
  studentId: string
  studentName: string
  mealType: MealType
  date: string
  rating: number
  complainedItems: string[]
  suggestion?: string
  submittedAt: string
}

export interface FoodItemComplaint {
  itemName: string
  complaintCount: number
  percentage: number
}

export interface Feedback {
  id: string
  studentId: string
  studentName: string
  date: string
  mealType: 'breakfast' | 'lunch' | 'dinner'
  rating: number
  comment: string
  category: 'food-quality' | 'portion-size' | 'complaint' | 'suggestion'
  resolved: boolean
}

export interface StudentStatistics {
  totalWaste: number
  averageWastePerMeal: number
  wasteStatus: 'good' | 'moderate' | 'high'
  attendanceRate: number
  totalMeals: number
  mealsAttended: number
}

export interface ManagerDashboard {
  totalStudents: number
  totalAttendance: number
  totalWasteToday: number
  averageWastePerStudent: number
  topComplaints: Feedback[]
  recentAttendance: Attendance[]
}

export interface AdminDashboard {
  totalStudents: number
  totalManagers: number
  averageWastePerDay: number
  attendanceRate: number
  studentsWithWarnings: Student[]
  environmentalImpact: {
    co2Saved: number
    wasteReduced: number
    waterSaved: number
  }
}

export interface LeaderboardEntry {
  rank: number
  name: string
  rollNumber: string
  points: number
  status: 'excellent' | 'good' | 'fair'
}

export interface EnvironmentalMetrics {
  totalWasteReduced: number
  co2Offset: number
  waterSaved: number
  treesEquivalent: number
}
