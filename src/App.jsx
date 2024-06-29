import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
     </Provider>
  );
};

export default App;

// jsx-файлы содержат в себе не только js-код, но и код-html-вёрстку, пускай и не совсем такой же
// в суть работы browserrouter и routes вникать не надо: они служебные теги
