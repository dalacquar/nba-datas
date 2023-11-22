import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  status: string;
  data?: any;
  message: string;
}

export const getAllPlayers = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://stats.nba.com/stats/playerindex`
    );

    return {
      status: "success",
      data: response?.data,
      message: "Players received with success",
    };
  } catch (error) {
    console.error("Error receiving players:", error);

    return {
      status: "error",
      message: "Error receiving players",
    };
  }
};

export const getPlayersByTeam = async (
  teamId: number
): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://www.balldontlie.io/api/v1/players?team_ids[]=${teamId}`
    );

    return {
      status: "success",
      data: response?.data,
      message: "Players received with success",
    };
  } catch (error) {
    console.error("Error receiving players:", error);

    return {
      status: "error",
      message: "Error receiving players",
    };
  }
};
