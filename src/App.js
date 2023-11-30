import Categorize from "./pages/Categorize.js";
import Home from "./pages/Home.js"
import ImgUpload from "./pages/ImgUpload.js";
import Login from "./components/Login.js";
// import ShareFolder from "./components/ShareFolder.js";
import { Routes, Route, Link } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import ImgShow from "./components/ImgShow.js";
import Edit from "./pages/Edit.js";
import FolderImgUpload from "./components/FolderImgUpload.js";
import FolderUploader from "./components/FolderUploader.js";


function App() {
  
  return (
    
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Categorize" element={ <Categorize/> } />
        <Route path="/FolderUpload" element={ <FolderImgUpload/> } />
        <Route path="/FolderUploader" element={ <FolderUploader/> } />
        <Route path="/Edit" element={ <Edit/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="*" element={ <h1>이 페이지는 없는 페이지 입니당</h1> } />
      </Routes>


    {/* 이것저것 컴포넌트 */}
      {/* <ShareFolder/> */}
      {/* <Categorize /> */}
      {/* <Login/> */}
      {/* <Edit/> */}
      {/* <ImgUpload /> */}
      {/* <ImgShow/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
