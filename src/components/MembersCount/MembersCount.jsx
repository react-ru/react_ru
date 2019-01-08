import React, { Suspense } from "react";
import { LoadMembersCount } from "./LoadMembersCount";
import { ErrorBoundary } from "./ErrorBoundary";

import "./MembersCount.css";

export const MembersCount = () => {
  return (
    <div className="MembersCount" title="Количество участников в группе">
      <ErrorBoundary>
        <Suspense fallback={"..."}>
          <LoadMembersCount />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
