import { Schema } from 'mongoose';

const BoardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        default: [],
      },
    ],
  },
  { timestamps: true, collection: 'boards' },
);

export default BoardSchema;
