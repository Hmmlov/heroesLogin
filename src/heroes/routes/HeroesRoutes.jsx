import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, HeroesPage, SearchPage} from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="heroes/:id" element={<HeroesPage />} />

          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
