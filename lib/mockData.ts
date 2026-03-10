import { 
  Student, 
  FoodWaste, 
  Attendance, 
  Menu, 
  Feedback, 
  LeaderboardEntry,
  StudentStatistics,
  MealAttendanceStatus,
  StudentMealAttendance,
  MealFeedbackItem,
  FoodItemComplaint
} from './types'

export const mockStudents: Student[] = [
  { id: '1', name: 'Aarav Sharma', rollNumber: 'CS001', email: 'aarav@college.edu', mealPlan: 'standard', joinDate: '2024-01-15' },
  { id: '2', name: 'Priya Verma', rollNumber: 'CS002', email: 'priya@college.edu', mealPlan: 'premium', joinDate: '2024-01-15' },
  { id: '3', name: 'Rahul Kapoor', rollNumber: 'CS003', email: 'rahul@college.edu', mealPlan: 'standard', joinDate: '2024-02-01' },
  { id: '4', name: 'Ananya Gupta', rollNumber: 'ECE001', email: 'ananya@college.edu', mealPlan: 'premium', joinDate: '2024-01-20' },
  { id: '5', name: 'Vikram Singh', rollNumber: 'ME001', email: 'vikram@college.edu', mealPlan: 'standard', joinDate: '2024-01-25' },
]

export const mockFoodWaste: FoodWaste[] = [
  { id: '1', date: '2024-03-09', mealType: 'breakfast', wasteInKg: 2.5, status: 'good', studentCount: 45 },
  { id: '2', date: '2024-03-09', mealType: 'lunch', wasteInKg: 6.8, status: 'moderate', studentCount: 120 },
  { id: '3', date: '2024-03-09', mealType: 'dinner', wasteInKg: 5.2, status: 'moderate', studentCount: 95 },
  { id: '4', date: '2024-03-08', mealType: 'breakfast', wasteInKg: 3.1, status: 'good', studentCount: 42 },
  { id: '5', date: '2024-03-08', mealType: 'lunch', wasteInKg: 7.2, status: 'high', studentCount: 118 },
  { id: '6', date: '2024-03-08', mealType: 'dinner', wasteInKg: 4.8, status: 'moderate', studentCount: 92 },
  { id: '7', date: '2024-03-07', mealType: 'breakfast', wasteInKg: 2.1, status: 'good', studentCount: 48 },
  { id: '8', date: '2024-03-07', mealType: 'lunch', wasteInKg: 5.9, status: 'moderate', studentCount: 125 },
]

export const mockAttendance: Attendance[] = [
  { id: '1', date: '2024-03-09', mealType: 'breakfast', presentCount: 45, totalStudents: 60, attendancePercentage: 75 },
  { id: '2', date: '2024-03-09', mealType: 'lunch', presentCount: 120, totalStudents: 150, attendancePercentage: 80 },
  { id: '3', date: '2024-03-09', mealType: 'dinner', presentCount: 95, totalStudents: 140, attendancePercentage: 67.8 },
  { id: '4', date: '2024-03-08', mealType: 'breakfast', presentCount: 42, totalStudents: 60, attendancePercentage: 70 },
  { id: '5', date: '2024-03-08', mealType: 'lunch', presentCount: 118, totalStudents: 150, attendancePercentage: 78.6 },
  { id: '6', date: '2024-03-08', mealType: 'dinner', presentCount: 92, totalStudents: 140, attendancePercentage: 65.7 },
]

export const mockMenus: Menu[] = [
  {
    id: '1',
    date: '2024-03-09',
    mealType: 'breakfast',
    items: ['Paneer Paratha', 'Curd', 'Fresh Fruit', 'Tea/Coffee'],
    cuisine: 'Indian',
  },
  {
    id: '2',
    date: '2024-03-09',
    mealType: 'lunch',
    items: ['Biryani', 'Raita', 'Salad', 'Pickle'],
    cuisine: 'Indian',
  },
  {
    id: '3',
    date: '2024-03-09',
    mealType: 'dinner',
    items: ['Dal Makhani', 'Basmati Rice', 'Naan', 'Vegetables'],
    cuisine: 'Indian',
  },
  {
    id: '4',
    date: '2024-03-10',
    mealType: 'breakfast',
    items: ['Idli', 'Sambar', 'Coconut Chutney', 'Fresh Juice'],
    cuisine: 'South Indian',
  },
]

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Aarav Sharma',
    date: '2024-03-09',
    mealType: 'lunch',
    rating: 4,
    comment: 'Good biryani, but could use more flavor',
    category: 'food-quality',
    resolved: false,
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Priya Verma',
    date: '2024-03-09',
    mealType: 'dinner',
    rating: 2,
    comment: 'Portions were too small',
    category: 'portion-size',
    resolved: false,
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Rahul Kapoor',
    date: '2024-03-08',
    mealType: 'breakfast',
    rating: 5,
    comment: 'Excellent paneer paratha!',
    category: 'suggestion',
    resolved: true,
  },
  {
    id: '4',
    studentId: '4',
    studentName: 'Ananya Gupta',
    date: '2024-03-09',
    mealType: 'lunch',
    rating: 3,
    comment: 'Biryani was dry today',
    category: 'complaint',
    resolved: false,
  },
  {
    id: '5',
    studentId: '5',
    studentName: 'Vikram Singh',
    date: '2024-03-08',
    mealType: 'dinner',
    rating: 1,
    comment: 'Dal was undercooked',
    category: 'complaint',
    resolved: false,
  },
]

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Aarav Sharma', rollNumber: 'CS001', points: 950, status: 'excellent' },
  { rank: 2, name: 'Priya Verma', rollNumber: 'CS002', points: 875, status: 'excellent' },
  { rank: 3, name: 'Ananya Gupta', rollNumber: 'ECE001', points: 820, status: 'good' },
  { rank: 4, name: 'Rahul Kapoor', rollNumber: 'CS003', points: 755, status: 'good' },
  { rank: 5, name: 'Vikram Singh', rollNumber: 'ME001', points: 680, status: 'fair' },
]

export const mockStudentStats: StudentStatistics = {
  totalWaste: 24.6,
  averageWastePerMeal: 2.05,
  wasteStatus: 'good',
  attendanceRate: 76.4,
  totalMeals: 12,
  mealsAttended: 9,
}

export const mockHistoryData = [
  { date: '2024-03-09', breakfast: 2.5, lunch: 6.8, dinner: 5.2 },
  { date: '2024-03-08', breakfast: 3.1, lunch: 7.2, dinner: 4.8 },
  { date: '2024-03-07', breakfast: 2.1, lunch: 5.9, dinner: 6.1 },
  { date: '2024-03-06', breakfast: 2.8, lunch: 6.5, dinner: 5.5 },
  { date: '2024-03-05', breakfast: 2.3, lunch: 7.1, dinner: 4.9 },
]

export const mockAttendanceHistory = [
  { date: '2024-03-09', breakfast: 75, lunch: 80, dinner: 67.8 },
  { date: '2024-03-08', breakfast: 70, lunch: 78.6, dinner: 65.7 },
  { date: '2024-03-07', breakfast: 72, lunch: 82, dinner: 68 },
  { date: '2024-03-06', breakfast: 68, lunch: 76, dinner: 70 },
  { date: '2024-03-05', breakfast: 73, lunch: 81, dinner: 69 },
]

export const mockStudentsWithWarnings = [
  { id: '1', name: 'Rohan Patel', rollNumber: 'CS101', email: 'rohan@college.edu', mealPlan: 'standard', joinDate: '2024-01-15', warnings: 6 },
  { id: '2', name: 'Sanjay Kumar', rollNumber: 'ECE102', email: 'sanjay@college.edu', mealPlan: 'standard', joinDate: '2024-01-20', warnings: 5 },
  { id: '3', name: 'Neha Singh', rollNumber: 'ME103', email: 'neha@college.edu', mealPlan: 'premium', joinDate: '2024-02-01', warnings: 8 },
]

export const mockMealAttendanceStatus: MealAttendanceStatus[] = [
  { mealType: 'breakfast', status: 'open', attendingCount: 120, totalEligible: 150 },
  { mealType: 'lunch', status: 'open', attendingCount: 340, totalEligible: 400 },
  { mealType: 'dinner', status: 'closed', attendingCount: 290, totalEligible: 350 },
]

export const mockStudentMealAttendance: StudentMealAttendance[] = [
  { mealType: 'breakfast', date: '2024-03-09', status: 'coming', submittedAt: '2024-03-09 08:00' },
  { mealType: 'lunch', date: '2024-03-09', status: 'coming', submittedAt: '2024-03-09 11:00' },
  { mealType: 'dinner', date: '2024-03-09', status: 'not-submitted' },
]

export const mockMealFeedback: MealFeedbackItem[] = [
  {
    id: '1',
    studentId: '1',
    studentName: 'Aarav Sharma',
    mealType: 'lunch',
    date: '2024-03-09',
    rating: 4,
    complainedItems: ['Biryani'],
    suggestion: 'Could use more flavor and better rice quality',
    submittedAt: '2024-03-09 14:30',
  },
  {
    id: '2',
    studentId: '2',
    studentName: 'Priya Verma',
    mealType: 'dinner',
    date: '2024-03-09',
    rating: 2,
    complainedItems: ['Dal Makhani', 'Naan'],
    suggestion: 'Portions were too small and dal was undercooked',
    submittedAt: '2024-03-09 20:15',
  },
  {
    id: '3',
    studentId: '3',
    studentName: 'Rahul Kapoor',
    mealType: 'breakfast',
    date: '2024-03-09',
    rating: 5,
    complainedItems: [],
    suggestion: 'Excellent paneer paratha! Please make it more often.',
    submittedAt: '2024-03-09 09:45',
  },
  {
    id: '4',
    studentId: '4',
    studentName: 'Ananya Gupta',
    mealType: 'lunch',
    date: '2024-03-08',
    rating: 3,
    complainedItems: ['Biryani', 'Raita'],
    suggestion: 'Biryani was dry today, raita was too sour',
    submittedAt: '2024-03-08 14:20',
  },
]

export const mockFoodItemComplaints: FoodItemComplaint[] = [
  { itemName: 'Dal', complaintCount: 45, percentage: 28 },
  { itemName: 'Roti', complaintCount: 30, percentage: 18 },
  { itemName: 'Biryani', complaintCount: 28, percentage: 17 },
  { itemName: 'Rice', complaintCount: 22, percentage: 13 },
  { itemName: 'Vegetables', complaintCount: 15, percentage: 9 },
  { itemName: 'Dal Makhani', complaintCount: 12, percentage: 7 },
]
