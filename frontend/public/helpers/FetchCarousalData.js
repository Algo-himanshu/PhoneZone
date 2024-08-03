import axios from "axios";

export const FetchCarousalData = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/fetchCarousalData`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching phone data:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
