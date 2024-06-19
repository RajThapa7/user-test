"use client";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface IResponse {
  users: User[];
}

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

const useFetchUser = (pagination: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User[]>([]);

  const fetchUser = async (): Promise<AxiosResponse<IResponse>> =>
    await axios.get(
      `https://give-me-users-forever.vercel.app/api/users/${pagination}/next`
    );

  useEffect(() => {
    setIsLoading(true);
    fetchUser()
      .then((res) => setUser(res.data.users))
      .catch((err) => {
        console.log(err);
        throw new Error("error while fetching the data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pagination]);

  return { user, isLoading };
};

export default useFetchUser;
