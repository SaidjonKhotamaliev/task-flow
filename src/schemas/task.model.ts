import { Schema } from 'mongoose';
import { TaskStatus } from 'src/libs/enums/task.enum';

const TaskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },

    taskDescription: {
      type: String,
    },

    taskStatus: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.TODO,
    },

    taskDueDate: {
      type: Date,
    },

    taskBoard: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
  },
  { timestamps: true, collection: 'tasks' },
);

export default TaskSchema;
