import React from "react";
import ProfileLayouts from "../layouts/ProfileLayouts";

const ProfilePage = () => {
  return (
    <ProfileLayouts username="@johndoe">
      <ProfileLayouts />
    </ProfileLayouts>
  );
};

export default ProfilePage;
