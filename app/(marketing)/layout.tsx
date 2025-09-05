import React from "react";
import Navigationbar from "@/components/home/navigationbar";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navigationbar />
      {children}
    </section>
  );
};

export default HomeLayout;
