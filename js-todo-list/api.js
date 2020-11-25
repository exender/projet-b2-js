const crudfulConfig = {
  headers: {
    cfAccessKey: "b599887d2bdc75ceaef7b06459f28e573de06d01",
  },
};

export const getTasks = (listId) =>
  axios
  .get(
    `https://todo.crudful.com/tasks?listId=${listId}`,
    crudfulConfig
  )
  .then((result) => result.data.results);

export const setTaskIsCompleted = (taskId, isCompleted) =>
  axios.patch(
    `https://todo.crudful.com/tasks/${taskId}`, {
      isCompleted: isCompleted
    },
    crudfulConfig
  );

export const deleteTask = (taskId) =>
  axios.delete(
    `https://todo.crudful.com/tasks/${taskId}`,
    crudfulConfig
  );

export const createTask = (title, details, due, listId) =>
  axios.post(
    "https://todo.crudful.com/tasks", {
      title: title,
      details: details,
      due: due,
      listId: listId
    },
    crudfulConfig
  );

export const getLists = () =>
  axios
  .get("https://todo.crudful.com/lists", crudfulConfig)
  .then((result) => result.data.results);

export const deleteList = (listId) =>
  axios.delete(
    `https://todo.crudful.com/lists/${listId}`,
    crudfulConfig
  );

export const createList = (title, color) =>
  axios.post(
    "https://todo.crudful.com/lists", {
      title: title,
      color: color
    },
    crudfulConfig
  );