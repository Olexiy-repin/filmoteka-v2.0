export class LocalStorageService {
  constructor() {}

  save(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }

  load(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Remove state error: ', error.message);
    }
  }
}
