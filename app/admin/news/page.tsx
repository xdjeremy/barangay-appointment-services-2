"use client";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { NewsSchema } from "@/app/admin/news/components/news-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils/cn";
import { pocketbase } from "@/lib/utils/pocketbase";
import { Admin } from "pocketbase";
import { useRouter } from "next/navigation";
import { NewsRecord } from "@/types/pocketbase-types";

const AdminNews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof NewsSchema>>({
    resolver: zodResolver(NewsSchema),
  });

  const router = useRouter();
  const publishNews: SubmitHandler<z.infer<typeof NewsSchema>> = async (
    data
  ) => {
    try {
      if (!pocketbase.authStore.model) {
        return toast.error("You are not logged in.");
      }

      const news: NewsRecord = {
        title: data.title,
        content: data.content,
        // author: pocketbase.authStore.model.id,
      };

      await pocketbase.collection("news").create(news);

      toast.success("News published successfully.");
      reset();
    } catch (err: any) {
      return toast.error(err.message);
    }
  };

  // check if user is admin
  useEffect(() => {
    if (!(pocketbase.authStore.model instanceof Admin)) {
      router.push("/news");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(publishNews)}>
      <div className="text-[64px] font-black text-gray-800">Add News</div>

      <div
        className={"mx-auto flex w-full max-w-2xl flex-col items-center gap-6"}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">News Title:</span>
          </label>
          <input
            {...register("title")}
            type="text"
            placeholder="Type here"
            className={cn(
              errors.title && "input-error",
              "input-bordered input w-full text-black"
            )}
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Content:</span>
          </label>
          <textarea
            {...register("content")}
            className={cn(
              errors.content && "textarea-error",
              "textarea-bordered textarea h-56 text-black"
            )}
            rows={20}
          ></textarea>
        </div>

        <div className={"flex w-full flex-row justify-end"}>
          <button type={"submit"} className={"btn-neutral btn"}>
            Publish
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdminNews;
