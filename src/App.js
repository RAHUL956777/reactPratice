import "./App.css";
// import { Header, Header2 } from "./Components/Header";
import Header from "./Components/Header";
import Home from "./Components/Home";
// function MyComponents({ name, roll, income = 100 }) {
//   return (
//     <>
//       <div>
//         {name}: ${income}
//         <hr />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <MyComponents name={"Sushanta"} roll={50} income={3000} /> */}
      {/* <MyComponents name={"Rahul"} roll={59} income={5000} /> */}
      {/* <MyComponents name={"Sayantan"} roll={51} income={4000} /> */}
      {/* <Header />
      <Header2 /> */}

      <Header />
      <Home />
      <p>welcome</p>
    </div>
  );
}

export default App;
