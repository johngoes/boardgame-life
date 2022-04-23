import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Players from "./components/Layout/Players";
import Splash from "./components/Layout/Splash";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="App h-full bg-slate-600">
          <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/players' element={<Players />} />
          </Routes>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
