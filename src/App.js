import { Routes, Route, Link } from "react-router-dom";
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card imageUrl="https://picsum.photos/200/250" title="幸福来敲门" createdAt="一天前" rating="暂无评分"></Card>
      <Card imageUrl="" title="钢铁侠" createdAt="三天前" rating="8.6"></Card>
    </div>
 );
}

export default App;



// =====================ListExample=================
// import { Routes, Route, Link } from "react-router-dom";
// import TodoItem from "./components/TodoItem.js";
// import ListExample from "./list/ListExample.js";

// function App() {
//    const todos = ['Wath Movie', 'Walk dogs', 'Have dinner'];
//    return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map((todo) => {
//           return <TodoItem text={todo}></TodoItem>
//         })}
//       </ul>
//       <hr />
//        <ListExample /> 
//       </div>
//   );
// }

// export default App;
// =====================ListExample=================

// =============EventExample FormExample Exchange==============
// import { Routes, Route, Link } from "react-router-dom";
// import EventExample from "./class-function-component/EventExample.js";
// import FormExample from "./form/FormExample.js";
// import Exchange from "./CurrencyExachange/Exchange.js";

// function App() {
//   return (
//     <div>
//       <div className="navbar">
//         <Link to="/">Currency Exchange</Link>
//         <Link to="/about">Form Example</Link>
//         <Link to="/event">Event Example</Link>
//       </div>

//       <Routes>
//         <Route path="/" element={<Exchange />} />
//         <Route path="about" element={<FormExample />} />
//         <Route path="event" element={<EventExample />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// =============EventExample FormExample Exchange==============
