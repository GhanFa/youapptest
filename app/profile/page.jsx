"use client";
import React, { useEffect, useState } from "react";
import ProfileLayouts from "../layouts/ProfileLayouts";
import { getUsername } from "@/lib/auth";

const token = localStorage.getItem("token");
const ProfilePage = () => {
  const [username, setUsername] = useState(null);

  console.log(token);
  useEffect(() => {
    setUsername(getUsername(token));
  }, []);
  return (
    <ProfileLayouts username={username}>
      <ProfileLayouts />
    </ProfileLayouts>
  );
};

export default ProfilePage;
