// import type { User, UserDTO } from '../types';

// export function toUserDTO(user: User): UserDTO {
//   return {
//     ...user,
//     createdAt: user.createdAt.toISOString() // convert Date to ISO string
//   };
// }

// export function fromUserDTO(dto: Omit<UserDTO, 'id'>): Omit<User, 'id'> {
//   return {
//     ...dto,
//     createdAt: dto.createdAt ? new Date(dto.createdAt) : new Date()
//   };
// }