import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: any) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
}
