import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { JournalPagen } from "../pages/JournalPagen";

export const JournalRouter = () => {
  return (
    <Routes>
      <Route path="JournalPagen" element={<JournalPagen />} />
      <Route path="/*" element={<Navigate to="/JournalPagen" />} />
    </Routes>
  );
};
