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

// 数据库模型类型
export interface DbUser {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

// API 传输类型
export interface UserDTO {
  id: number;
  name: string;
  email: string;
  createdAt: string; // ISO 字符串格式
}

// 请求/响应类型
export interface CreateUserRequest
  extends Omit<UserDTO, 'id' | 'createdAt'> {
  password: string;
}