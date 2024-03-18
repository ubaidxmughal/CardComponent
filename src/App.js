import Card from "./components/card";
import Footer from "./components/footer";
import NewsLetter from "./components/newsletter";

function App() {
  return (
    <div className="flex">
      <Card cardHeader={<NewsLetter />} cardFooter={<Footer />} />
    </div>
  );
}

export default App;
