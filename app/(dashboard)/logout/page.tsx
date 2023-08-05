"use client";
import React, { useEffect } from "react";
import { pocketbase } from "@/lib/utils/pocketbase";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    pocketbase.authStore.clear();
    // clear pb_auth cookie
    document.cookie =
      "pb_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // wait for 1 second and redirect to login page
    setTimeout(() => {
      router.push("login");
    }, 1000);
  }, []);
  return <div></div>;
};

export default Logout;
