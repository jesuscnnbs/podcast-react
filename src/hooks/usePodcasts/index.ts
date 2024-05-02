import ky from "ky";
import { useQuery } from "@tanstack/react-query";

const fetchPodcasts = async (limit = 100) => {
  const parsed = await ky(
    `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
  ).json();
  console.log("FETCH: ", parsed);
  return parsed;
};

const usePodcasts = (limit: number) => {
  return useQuery({
    queryKey: ["podcasts", limit],
    queryFn: () => fetchPodcasts(limit),
  });
};

export { usePodcasts, fetchPodcasts };
