import Task from "./Task";
// * to appear in the template
export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};
// * the default case for Task
export const Default = {
  args: { task: { id: "1", title: "First Task", state: "TASK_INBOX" } },
};
// * Pinned tasks
export const Pinned = {
  args: { task: { ...Default.args.task, state: "TASK_PINNED" } },
};
// * Archived tasks
export const Archived = {
  args: { task: { ...Default.args.task, state: "TASK_ARCHIVED" } },
};
