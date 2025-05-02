import { Schema } from 'mongoose';

const BoardSchema = new Schema(
  {
    boardTitle: {
      type: String,
      required: true,
    },

    boardOwnerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    boardTasksIds: [
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
