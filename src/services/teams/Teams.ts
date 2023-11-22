import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  status: string;
  data?: any;
  message: string;
}

export const getAllTeams = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      "https://data.nba.net/prod/v1/teams.json"
    );

    return {
      status: "success",
      data: response?.data,
      message: "Teams received with success",
    };
  } catch (error) {
    console.error("Error receiving teams:", error);

    return {
      status: "error",
      message: "Error receiving teams",
    };
  }
};
