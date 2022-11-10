import AsyncStorage from '@react-native-async-storage/async-storage';

const prefix = 'apna_Hero';

const store = async (key, value) => {
  let item = {
    value,
  };

  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async key => {
  try {
    const value = (await AsyncStorage.getItem(prefix + key)) || null;
    const item = JSON.parse(value);

    if (!item) return null;

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

const remove = async key => {
  try {
    await AsyncStorage.removeItem(prefix + key);
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
  remove,
};
