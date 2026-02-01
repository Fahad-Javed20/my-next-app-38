import React from "react";
import { SkeletonDemo } from "@/components/Skeleton";

const loading = () => {
  return (
    <div className="flex items-center mx-auto justify-center h-screen">
        <SkeletonDemo />
    </div>
  );
};

export default loading;
