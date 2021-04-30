import React, { useEffect } from "react";
import { get_QueryUser } from "~/src/service/UserService";

export const useUserData = (
  userID: string,
  setImageURL: React.Dispatch<React.SetStateAction<string>>,
  setUserName: React.Dispatch<React.SetStateAction<string>>
): void =>
  useEffect(() => {
    (async () => {
      const curUser = await get_QueryUser(userID).catch(err => {
        throw new Error(err);
      });
      const { imageURL, name } = curUser.userData!;
      setImageURL(imageURL);
      setUserName(name);
    })();
  }, [userID]);
