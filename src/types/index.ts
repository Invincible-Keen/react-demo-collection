// src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
}

export interface ApiError {
  message: string;
  code?: number;
}

// src/types/index.ts

// Database user object
export interface DbUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// API data transfer object
export interface UserDTO {
  id: number;
  name: string;
  email: string;
  createdAt: string; // ISO string
}

// Request payload for creating a new user
export interface CreateUserRequest
  extends Omit<UserDTO, 'id' | 'createdAt'> {
  password: string;
}