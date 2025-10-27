import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(Number),
    name: String,
    email: String,
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
db.user.create({ id: 1, name: 'John Doe', email: 'john@example.com' });
db.user.create({ id: 2, name: 'Jane Smith', email: 'jane@example.com' });