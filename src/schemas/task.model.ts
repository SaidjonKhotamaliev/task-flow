import { Schema } from 'mongoose';
import { TaskStatus } from 'src/libs/enums/task.enum';

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.TODO,
    },

    dueDate: {
      type: Date,
    },

    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
  },
  { timestamps: true, collection: 'tasks' },
);

export default TaskSchema;
