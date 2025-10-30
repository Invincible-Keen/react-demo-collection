import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
    password: String,
    createdAt: () => new Date(), // ensure returns Date object
  },
  post: {
    id: primaryKey(Number),
    title: String,
    content: String,
    authorId: Number,
    createdAt: () => new Date(), // ensure returns Date object
  }
});

// initialize with some mock data
db.user.create({ id: 1, name: 'Keen', email: 'keen@example.com', password: '123' });
db.user.create({ id: 2, name: 'Admin', email: 'admin@example.com', password: 'adminpass' });