// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import { db } from './db';
import type { User, ApiError } from '../types';

export const handlers = [
  // GET /users
  http.get('/users', async () => {
    const users = db.user.getAll();
    await delay(150); // 模拟网络延迟
    return HttpResponse.json(users);
  }),

  // GET /users/:id
  http.get('/users/:id', async ({ params }) => {
    const user = db.user.findFirst({
      where: { id: { equals: Number(params.id) } }
    });

    if (!user) {
      return HttpResponse.json(
        { message: 'User not found', code: 404 } as ApiError,
        { status: 404 }
      );
    }

    return HttpResponse.json(user);
  }),

  // POST /users
  http.post('/users', async ({ request }) => {
    const userData = await request.json() as Omit<User, 'id'>;
    
    try {
      const newUser = db.user.create({
        ...userData,
        createdAt: new Date()
      });
      return HttpResponse.json(newUser, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
      return HttpResponse.json(
        { message: 'Failed to create user', code: 400 } as ApiError,
        { status: 400 }
      );
    }
  }),

  // PUT /users/:id
  http.put('/users/:id', async ({ params, request }) => {
    const updates = await request.json() as Partial<User>;
    
    const updatedUser = db.user.update({
      where: { id: { equals: Number(params.id) } },
      data: updates
    });

    if (!updatedUser) {
      return HttpResponse.json(
        { message: 'User not found', code: 404 } as ApiError,
        { status: 404 }
      );
    }

    return HttpResponse.json(updatedUser);
  }),

  // DELETE /users/:id
  http.delete('/users/:id', async ({ params }) => {
    const deletedUser = db.user.delete({
      where: { id: { equals: Number(params.id) } }
    });

    if (!deletedUser) {
      return HttpResponse.json(
        { message: 'User not found', code: 404 } as ApiError,
        { status: 404 }
      );
    }

    return new HttpResponse(null, { status: 204 });
  })
];

// 辅助函数：模拟延迟
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}