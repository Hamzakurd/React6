import Footer from "./assets/Components/Layout/Footer";
import Greeting from "./assets/Components/Layout/Greeting";
import Header from "./assets/Components/Layout/Header";
import Student from "./assets/Components/Layout/Student";
import Home from "./assets/Pages/Home";


function App() {
  return (
    <>
      <Header />

      <div className="min-h-[100vh] p-6">
        
        
        <div className="flex flex-wrap justify-center gap-6">
          <Student
            name="Ahmad"
            age={22}
            major="Computer Science"
            graduated={true}
          />

          <Student
            name="Hamza"
            age={20}
            major="Computer Information Systems"
            graduated={false}
          />

          <Student
            name="Omar"
            age={21}
            graduated={false}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;