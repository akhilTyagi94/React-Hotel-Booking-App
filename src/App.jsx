import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { QueryClient, QueryClientProvider } from "react-query";

const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
