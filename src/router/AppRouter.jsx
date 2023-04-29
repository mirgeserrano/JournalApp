import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRouter } from "../journal/router/JournalRouter";
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { UseCheckAuth } from "../hooks";

export const AppRouter = () => {
  const { status } = UseCheckAuth();
  if (status === "cheking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRouter />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
