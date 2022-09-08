import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ImageListContainer from "Containers/ImageList";

const AppRoutes = () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<ImageListContainer />} />
      </Routes>
    </Router>
  </>
);

export default AppRoutes;
