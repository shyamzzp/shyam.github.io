// @ts-ignore
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Projects from './Views/Projects/Projects';
import Blog from './Views/Blog/Blog';
import CaseStudy from './Views/CaseStudy/CaseStudy';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/casestudy" element={<CaseStudy />} />
            </Routes>
        </Router>
    );
}

export default App;
