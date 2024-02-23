import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import React,{ useState} from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

// export default class App extends Component {

   const apiKey=process.env.REACT_APP_NEWS_API
   const [progress, setProgress] = useState(0);

  // state = {
  //   progress:0,
  // }
  
  // setProgress = (progress)=>{
  //   setState({progress:progress})
  // }

  // render() {
    return (
      <div>
         <LoadingBar
          color='#f11946'
          progress={progress}
          // state.
          // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
       
        <Routes>
          <Route
            path="/"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="general"
                pageSize={8}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="business"
                pageSize={8}
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="entertainment"
                pageSize={8}
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={8} country="in" category="health" />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="science"
                pageSize={8}
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News setProgress={setProgress} apiKey={apiKey}key="sports" pageSize={8} country="in" category="sports" />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="technology"
                pageSize={8}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </div>
    );
}
// export default App;