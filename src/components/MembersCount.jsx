import React, { Suspense } from "react";
import { endpointBase } from "../constants/endpointBase";
import { chatId } from "../constants/chatId";
import useFetch from "fetch-suspense";

import "./MembersCount.css";

const LoadMembersCount = () => {
  const { members_count } = useFetch(
    `${endpointBase}/api/members_count?chat_id=${chatId}`
  );
  return members_count;
  // return 575;
};

export const MembersCount = () => {
  return (
    <div className="MembersCount" title="Количество участников в группе">
      <Suspense fallback={"..."}>
        <LoadMembersCount />
      </Suspense>
    </div>
  );
};
