export const setST = (key, value) => {
  try {
    const data = {
      value,
      creationDate: new Date(),
    };

    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Ups:", error);
  }
};

export const getST = (key) => {
  try {
    const { value } = JSON.parse(localStorage.getItem(key));
    return value;
  } catch (error) {
    console.log(error)
    return null;
  }
};
