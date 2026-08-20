import { Header } from "./assets/components/Header"
import { Hero } from "./assets/components/Hero"
import { Categories } from "./assets/components/Categories"
import { Galery } from "./assets/components/Galery"
import { Footer } from "./assets/components/Footer"




function App() {


  return (
    <>
      <Header />
      <main className="py-10">
        <Hero />
        <Categories />
        <Galery />
      </main>
      <Footer />
    </>
  )
}

export default App
