import MainNavbar from "./Component/Navbar/MainNavbar";
import Search from "./Component/Search/Search";

document.body.style = "background: #0F0E12;";
function App() {
  return (
    <div style={{ background: "#0F0E12" }} className="text-white">
      <div style={{ paddingBottom: "200px" }}>
        <div className="mb-5">
          <MainNavbar />
        </div>
        <div className="container mx-auto mt-5">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
