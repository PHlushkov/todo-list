export const newDate = () => {
  // Создаем объект Date для текущей даты и времени
  const currentDate = new Date();

  // Получаем часы (в 12-часовом формате)
  let hours = currentDate.getHours() % 12;
  // Получаем минуты
  let minutes = currentDate.getMinutes();
  // Получаем "AM" или "PM"
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";

  // Добавляем ведущий ноль к часам и минутам, если они состоят из одной цифры
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Формируем строку с временем
  const timeString = hours + ":" + minutes + " " + ampm;

  // Получаем день, месяц и год
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0 до 11
  const year = currentDate.getFullYear();

  // Добавляем ведущий ноль к дню и месяцу, если они состоят из одной цифры
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Формируем строку с датой
  const dateString = `${timeString},  ${day}/${month}/${year}`;

  return dateString;
};

//изменение состояния completed
export const toggleComplete = (id, setTaskLists) => {
  setTaskLists((prevTaskLists) =>
    prevTaskLists.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed:
            task.completed === "completed" ? "incompleted" : "completed",
        };
      }
      return task;
    })
  );
};

//уникальный ID для списка
export const getUniqueID = () => Math.floor(Math.random() * Date.now());

export const handleSortChange = (optionValue, setTaskLists, taskLists) => {
  let sortedTasks = [...taskLists];

  if (optionValue === "all") {
    sortedTasks = taskLists;
  } else if (optionValue === "completed") {
    sortedTasks = taskLists.filter((task) => task.completed);
  } else if (optionValue === "incomplete") {
    sortedTasks = taskLists.filter((task) => !task.completed);
  }

  return sortedTasks;
};
