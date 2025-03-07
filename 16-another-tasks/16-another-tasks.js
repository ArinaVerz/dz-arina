const newTask = {
  tasks: [],
  id: 0,
  addTask: function (title, priority) {
    this.tasks.push({ title, priority, id: this.id++ });
  },
  addTaskWithDescription: function (title, priority, description) {
    this.tasks.push({ title, priority, description, id: this.id++ });
  },
  deleteTask: function (taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  },
  updateTask: function (taskId, title, priority, description) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.title = title !== undefined ? title : task.title;
      task.priority = priority !== undefined ? priority : task.priority;
      task.description =
        description !== undefined ? description : task.description;
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

newTask.addTaskWithDescription("помыть посуду", 1, "Сделать это вечером");
console.log(newTask.showTasks());

newTask.addTaskWithDescription("добавить задачу 2",1,"Изменить описание позже");
console.log(newTask.showTasks(),`check for adding the second task with description`);

newTask.deleteTask(0);
console.log(newTask.showTasks(),`check for delete task 0 "помыть посуду" not in a list`);

newTask.updateTask(1, "обновить задачу 2", 2, "Новое описание для задачи 2");
console.log(newTask.showTasks(),`one task in a list, task has priority 2, title 'обновить задачу 2' and updated description`);
