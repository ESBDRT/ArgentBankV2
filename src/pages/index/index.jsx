import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../css/main.css";
import Features from "../../components/features/features";

function Index() {
  return (
    <body>
      <Header />
      <main>
        <div class="hero">
          <section class="hero-content">
            <h2 class="sr-only">Promoted Content</h2>
            <p class="subtitle">No fees.</p>
            <p class="subtitle">No minimum deposit.</p>
            <p class="subtitle">High interest rates.</p>
            <p class="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section class="features">
          <Features/>
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Index;