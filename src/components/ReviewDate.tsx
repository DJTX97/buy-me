"use client";
import { useState } from "react";

interface ReviewDateProps {
  date: string;
}

export default function ReviewDate({ date }: ReviewDateProps) {
  const [postDate, setPostDate] = useState(date);
  return <>{postDate}</>;
}
