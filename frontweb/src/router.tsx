import { Route, Routes } from "react-router-dom";
import Primary from "./routes/Primary";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Primary />} />
    </Routes>
  );
};
