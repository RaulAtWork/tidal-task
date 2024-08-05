import { LocalData } from "../entity/LocalData";

const LOCAL_STORAGE_KEY = "TIDAL_TASK";

function useLocalStorage() {
  function saveToLocalStorage(tasks) {
    let dataToSave = new LocalData(tasks);
    //console.log("Save lo local data", dataToSave)
    localStorage.setItem(LOCAL_STORAGE_KEY, dataToSave.getJSON());
  }

  function loadFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!data) return; // return if no data was retrieved
    // TODO: IF IT IS THE SAME DAY, JUST CLEAR STORAGE

    return new LocalData(data.taskList);
  }

  function clearLocalStorage() {
    localStorage.clear();
  }

  return { saveToLocalStorage, loadFromLocalStorage, clearLocalStorage };
}

export default useLocalStorage;
