import { Schema } from 'mongoose';
import { TaskPriority, TaskStatus } from 'src/libs/enums/task.enum';

const TaskSchema = new Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },

    taskDesc: {
      type: String,
    },

    taskStatus: {
      type: String,
      enum: TaskStatus,
      default: TaskStatus.TODO,
    },

    taskPriority: {
      type: String,
      enum: TaskPriority,
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
