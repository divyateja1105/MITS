import User from "./components/User";
import { State } from "./hooks/state";
import Form from "./hooks/form";
const App = () => {
  return (
    <>
      <User
        name="Divya"
        age={21}
        skills={["React", "JavaScript", "Node.js"]}
      />
      <hr />
      <State />
      <hr />
      <Form />
    </>
  );
};

export default App;