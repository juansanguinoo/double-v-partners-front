import { Bar } from "react-chartjs-2";
import HomeModel from "./HomeModel";
import { container } from "../../../config/inversifyContainer";
import { GetUserUseCase } from "../../User/domain/useCases/GetUserUseCase";
import { TYPES } from "../../../config/types";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const { userData } = HomeModel();
  const useCase = container.get<GetUserUseCase>(TYPES.GetUserUseCase);

  const [followersData, setFollowersData] = useState<number[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (userData.length === 0 || dataLoaded) return;
    const fetchUsers = async () => {
      const newFollowers: number[] = [];
      const promises = userData.slice(0, 10).map(async (user) => {
        const response = await useCase.execute(user.login);
        newFollowers.push(response.followers);
      });
      await Promise.all(promises);
      setFollowersData(newFollowers);
      setDataLoaded(true);
    };

    fetchUsers();
  }, [userData, useCase, dataLoaded]);

  const labels = userData.slice(0, 10).map((user) => user.login);
  const data = {
    labels,
    datasets: [
      {
        label: "Number of followers",
        data: followersData,
        backgroundColor: "rgba(79, 91, 247, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Number of followers per user",
      },
    },
  };

  return <Bar options={options} data={data} />;
};
