import axios from "axios";

export const fetchData = async () => {
  try {
    const res = await axios.get("https://api.coincap.io/v2/assets?limit=5");
    return res.data.data;
  } catch (error) {
    console.log("Error: ", error);
    return { error, status: false };
  }
};
