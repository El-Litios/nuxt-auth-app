import { defineStore } from "pinia";
import type { Costumer, Login, User } from "~/types";

export const useUserStore = defineStore("user", () => {
  const user = ref();
  const token = useCookie("USER_COOKIE", {
    maxAge: 60 * 60,
  });

  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);

  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<User>("https://dummyjson.com/auth/login", {
        method: "POST",
        body: data,
      });
      setToken(res.token);
      await fetchCostumer();
    } catch (err) {
      setToken();
      setUser();
      console.log(err);
    }
  };

  const fetchCostumer = async () => {
    if (token.value) {
      try {
        const res = await $fetch<Costumer>("https://dummyjson.com/users/1");
        setUser(res);
      } catch (error) {
        console.log(error);
        setUser();
      }
    }
  };

  const logout = async () => {
    setToken();
    setUser();
  };

  return {user, token, setToken, setUser, signIn, fetchCostumer, logout};
});
