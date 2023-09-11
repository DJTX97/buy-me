"use client";
import { useState } from "react";
import { getRandomDate } from "@/utils/dataFakerKit";

export default function ReviewDate() {
  const [postDate, setPostDate] = useState(getRandomDate());
  return <>{postDate}</>;
}
