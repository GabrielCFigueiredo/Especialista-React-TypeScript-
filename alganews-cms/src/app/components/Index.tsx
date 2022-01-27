import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import info from "../../core/utilis/Info";
import EditorProfile from "../views/EditorProfile.view";
import EditorsList from "../views/EditorsList.view";
import Form from "../views/Form.view";
import Home from "../views/Home.view";
import Notfound from "../views/NotFound.view";



export default function App() {

    useEffect(() => {
        window.onunhandledrejection = function (error: PromiseRejectionEvent ) {

            console.log(error);

            info({

                title: error.reason.response.data.title,
                description: error.reason.response.data.detail
            })
            
            
            
        }
    },[])
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/editores"} element={<EditorsList />} />
            <Route path={"/editores/:id"} element={<EditorProfile />} />
            <Route path={"/posts/criar"} element={<Form />} />
            <Route path='*' element={<Notfound />} />
        </Routes >
    </BrowserRouter>
}