import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/router/AuthRouter";
import { JournalRouter } from "../journal/router/JournalRouter";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />}></Route>
      <Route path="/*" element={<JournalRouter />}></Route>
    </Routes>
  );
};
