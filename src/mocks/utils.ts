// import type { User, UserDTO } from '../types';

// export function toUserDTO(user: User): UserDTO {
//   return {
//     ...user,
//     createdAt: user.createdAt.toISOString() // 转换为字符串
//   };
// }

// export function fromUserDTO(dto: Omit<UserDTO, 'id'>): Omit<User, 'id'> {
//   return {
//     ...dto,
//     createdAt: dto.createdAt ? new Date(dto.createdAt) : new Date()
//   };
// }