import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./feature/appLayout/AppLayout";
import Main from "./feature/home/Main";
import Gallery from "./feature/gallery/Gallery";
import Projects from "./feature/projects/Projects";
import Contacts from "./feature/contacts/Contacts";
import AboutUs from "./feature/aboutUs/AboutUs";

function App() {
  return (
    <>
      {/* <AppLayout /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="main" />} />

            <Route path="/main" element={<Main />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
