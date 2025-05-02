import { Schema } from 'mongoose';

const BoardSchema = new Schema(
  {
    boardTitle: {
      type: String,
      required: true,
    },

    boardOwner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    boardTasks: [
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
