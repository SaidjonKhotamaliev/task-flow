import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Board',
        default: [],
      },
    ],
  },
  { timestamps: true, collection: 'users' },
);

export default UserSchema;
