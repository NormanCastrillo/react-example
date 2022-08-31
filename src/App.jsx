import CreateUser from "./components/CreateUser";
import CreateUserList from "./components/CreateUserList";

function App() {
  return (
    <main className="bg-black p-4 h-screen">
      <div className="container mx-auto">
        <CreateUser />
        <CreateUserList />
      </div>
    </main>
  );
}

export default App;
