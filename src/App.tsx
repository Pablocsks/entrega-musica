
import Navbar from "./components/Navbar";
import MusicList from "./components/MusicList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <MusicList />
        <MusicList />
        <MusicList />
        <MusicList />
      </main>
    </div>
  );
};

export default App;