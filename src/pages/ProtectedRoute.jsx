import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../components/context/AuthContext";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="flex justify-center mt-32">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }
  if (!user || (requireAdmin && !user.isAdmin)) {
    // 사용자가 없거나, requireAdmin인데 user의 isAdmin이 false 라면..
    return <Navigate to="/" replace />; // replace를 true로 하면 잘못 들어간 경로를 히스토리에 저장하지 않게함!
  }

  return children;
  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, 어드민 권한도 가지고 있어야 함
  // 조건에 맞지 않으면 / 상위 경로로 이동!
  // 조건에 맞는 경우에만 전달된 children을 보여줌
}
