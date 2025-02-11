const taskManager = {
  tasks: [],
  id: 0,
  addTask: function (title, priority) {
    this.tasks.push({ title, priority, id: this.id++ });
  },
  deleteTask:  function (taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  },
  updateTask: function (taskId, title, priority) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.title = title || task.title;
      task.priority = priority || task.priority;
    }
  },
  sortByIdOrPriority: function (sortBy = `id`, order = `asc`) {
    if (sortBy === "id") this.tasks.sort((a, b) => a.id - b.id);
    if (sortBy === "priority")
      this.tasks.sort((a, b) => a.priority - b.priority);
    if (order === "desc") this.tasks.reverse();
  },
  showTasks: function () {
    return this.tasks;
  },
};

taskManager.addTask("помыть посуду", 1);
console.log(taskManager.showTasks());

taskManager.addTask("добавить задачу 2", 1);
console.log(taskManager.showTasks(), `check for adding 2 task`);

taskManager.deleteTask(0);
console.log(taskManager.showTasks(),
  `check for delete task 0 "помыть посуду" not in a list`);

taskManager.updateTask(1, "обновить задачу 2", 2);
console.log(taskManager.showTasks(),
  `one task in a list, task have priority 2 and title 'обновить задачу 2'`);

taskManager.addTask("задача 3", 3);
taskManager.addTask("задача 5", 5);
taskManager.addTask("задача 6", 6);
taskManager.addTask("задача 7", 7);
taskManager.addTask("задача 4", 4);
taskManager.addTask("задача 8", 8);
taskManager.sortByIdOrPriority();
console.log(taskManager.showTasks(),
  `sort by id in ascending order with default value`);
taskManager.sortByIdOrPriority("id", "desc");
console.log(taskManager.showTasks(), `sort by id in descending order`);

taskManager.sortByIdOrPriority("priority");
console.log(taskManager.showTasks(),
  `sort by priority in ascending order with default value`);

taskManager.sortByIdOrPriority("priority", "desc");
console.log(taskManager.showTasks(), `sort by priority in descending order `);
