"use client";

import React from "react";
import Hero, { HeroProps } from "@/components/careers/hero";

const Head: React.FC<HeroProps> = (props) => {
  return <Hero {...props} />;
};

export default Head;