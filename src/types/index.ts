export interface Task {
  id: string;
  title: string;
  description: string;
  tags: string[];
  assignees: User[];
  dueDate?: string;
  commentCount: number;
  attachmentCount: number;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
  color: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}