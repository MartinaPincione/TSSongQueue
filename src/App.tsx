import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SongQueue } from "./SongQueue";

function App(){
    return(
        <>
            <NavBar/>
            <Container className="mb-4">
                <Routes>
                    <Route path="/songqueue"  element={<SongQueue/>}/>
                </Routes>
            </Container>
        </>    
    )
}

export default App