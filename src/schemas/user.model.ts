import { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    userEmail: {
      type: String,
      required: true,
      unique: true,
    },

    userPassword: {
      type: String,
      required: true,
    },

    userBoards: [
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
