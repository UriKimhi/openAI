"use client";
import React from "react";
import TourInfo from "./TourInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getExistingTour, generateTourResponse, createNewTour } from "../app/utils/action";

const newTour = () => {
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);
      if (newTour) return newTour;

      //   const currentTokens = await fetchUserTokensById(userId);

      //   if (currentTokens < 300) {
      //     toast.error('Token balance too low....');
      //     return;
      //   }

      toast.error("No matching city found...");
      return null;

      //   const response = await createNewTour(newTour.tour);
      //   queryClient.invalidateQueries({ queryKey: ['tours'] });
      //   const newTokens = await subtractTokens(userId, newTour.tokens);
      //   toast.success(`${newTokens} tokens remaining...`);
      //   return newTour.tour;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefualt();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input className="input input-bordered join-item w-full" type="text" required placeholder="city" name="city" />
          <input className="input input-bordered join-item w-full" type="text" required placeholder="country" name="country" />
          <button className="btn btn-primary join-item" type="submit">
            GENERATE TOUR
          </button>
        </div>
      </form>
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};

export default newTour;
