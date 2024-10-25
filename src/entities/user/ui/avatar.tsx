import React from "react";
import { observer } from "mobx-react-lite";
import { Avatar, type AvatarProps } from "antd";

import type { UserDetails } from "../interfaces";
import { getUserAvatarFullPath, getUserInitials } from "../lib";

interface UserAvatarProps extends AvatarProps {
  user: UserDetails;
}

export const UserAvatar = observer(function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar size={40} src={getUserAvatarFullPath(user)} {...props}>
      {getUserInitials(user)}
    </Avatar>
  );
});
