export type Role = 'student' | 'faculty' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
  department?: string;
  enrollmentNo?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  faculty: string;
  semester: string;
  attendance: number;
  grade?: string;
  description?: string;
  isLive?: boolean;
  meetLink?: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
}

export interface Announcement {
  id: string;
  courseId: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isMe: boolean;
}

export const MOCK_USER: User = {
  id: '1',
  name: 'Sanjith P',
  email: 'sanjith@university.edu',
  role: 'student',
  avatar: 'https://picsum.photos/seed/alex/200',
  department: 'Computer Science',
  enrollmentNo: 'CS2023001',
};

export const MOCK_FACULTY: User = {
  id: '2',
  name: 'Sarah Smith',
  email: 's.smith@university.edu',
  role: 'faculty',
  avatar: 'https://picsum.photos/seed/sarah/200',
  department: 'Computer Science',
   enrollmentNo: 'CS2023002',
};

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    code: 'CS101',
    name: 'Introduction to Programming',
    faculty: 'Sarah Smith',
    semester: 'Fall 2023',
    attendance: 92,
    grade: 'A',
    description: 'Fundamentals of programming using Python and Java.',
    isLive: true,
    meetLink: 'https://meet.google.com/abc-defg-hij',
  },
  {
    id: 'c2',
    code: 'CS202',
    name: 'Data Structures & Algorithms',
    faculty: 'Prof. Michael Brown',
    semester: 'Fall 2023',
    attendance: 85,
    grade: 'B+',
    description: 'Advanced study of data organization and algorithmic efficiency.',
    isLive: false,
  },
  {
    id: 'c3',
    code: 'CS303',
    name: 'Database Management Systems',
    faculty: 'Dr. Emily White',
    semester: 'Fall 2023',
    attendance: 78,
    grade: 'A-',
    description: 'Relational databases, SQL, and database design principles.',
    isLive: false,
  },
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: 'a1',
    courseId: 'c1',
    courseName: 'CS101',
    title: 'Python Basics Lab',
    dueDate: '2023-11-15',
    status: 'pending',
  },
  {
    id: 'a2',
    courseId: 'c2',
    courseName: 'CS202',
    title: 'Linked List Implementation',
    dueDate: '2023-11-20',
    status: 'submitted',
  },
  {
    id: 'a3',
    courseId: 'c3',
    courseName: 'CS303',
    title: 'SQL Query Optimization',
    dueDate: '2023-11-10',
    status: 'graded',
    score: 95,
  },
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann1',
    courseId: 'c1',
    title: 'Midterm Exam Schedule',
    content: 'The midterm exam will be held on Nov 25th in Room 402.',
    date: '2023-11-01',
    author: 'Dr. Sarah Smith',
  },
  {
    id: 'ann2',
    courseId: 'c2',
    title: 'Guest Lecture: AI in Industry',
    content: 'Join us for a special session by Google engineers this Friday.',
    date: '2023-11-05',
    author: 'Prof. Michael Brown',
  },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: '2',
    senderName: 'Dr. Sarah Smith',
    content: 'Hello everyone, please remember to submit your assignments by midnight.',
    timestamp: '10:30 AM',
    isMe: false,
  },
  {
    id: 'm2',
    senderId: '1',
    senderName: 'Alex Johnson',
    content: 'Thank you Dr. Smith. I have a question about the third problem.',
    timestamp: '10:35 AM',
    isMe: true,
  },
  {
    id: 'm3',
    senderId: '2',
    senderName: 'Dr. Sarah Smith',
    content: 'Sure Alex, what is it?',
    timestamp: '10:36 AM',
    isMe: false,
  },
];

export const MOCK_TIMETABLE = [
  { day: 'Monday', classes: [{ time: '09:00 - 10:30', subject: 'CS101', room: 'R402' }, { time: '11:00 - 12:30', subject: 'CS202', room: 'R105' }] },
  { day: 'Tuesday', classes: [{ time: '10:00 - 11:30', subject: 'CS303', room: 'Lab 2' }] },
  { day: 'Wednesday', classes: [{ time: '09:00 - 10:30', subject: 'CS101', room: 'R402' }, { time: '14:00 - 15:30', subject: 'CS202', room: 'R105' }] },
  { day: 'Thursday', classes: [{ time: '11:00 - 12:30', subject: 'CS303', room: 'Lab 2' }] },
  { day: 'Friday', classes: [{ time: '09:00 - 10:30', subject: 'Seminar', room: 'Auditorium' }] },
];

export interface StudentMeeting {
  id: string;
  courseId: string;
  title: string;
  creator: string;
  startTime: string;
  meetLink: string;
  participants: number;
}

export const MOCK_STUDENT_MEETINGS: StudentMeeting[] = [
  {
    id: 'sm1',
    courseId: 'c1',
    title: 'CS101 Peer Review',
    creator: 'Alex Johnson',
    startTime: '2:00 PM',
    meetLink: 'https://meet.google.com/xyz-pdqr-mno',
    participants: 4,
  },
  {
    id: 'sm2',
    courseId: 'c2',
    title: 'Algorithm Brainstorming',
    creator: 'Sarah Miller',
    startTime: '4:30 PM',
    meetLink: 'https://meet.google.com/uvw-stuv-abc',
    participants: 3,
  },
];
