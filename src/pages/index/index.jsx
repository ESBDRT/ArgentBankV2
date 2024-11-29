import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "../../css/main.css";
import Features from "../../components/features/features";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

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
          <Features
            image={iconChat}
            alt="chat icon"
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our 24/7
            chat or through a phone call in less than 5 minutes."
          />
          <Features
            image={iconMoney}
            alt="money icon"
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be !"
          />
          <Features
            image={iconSecurity}
            alt="security icon"
            title="Security you can trust"
            content=" We use top of the line encryption to make sure your data and money is
            always safe."
          />
        </section>
      </main>
      <Footer />
    </body>
  );
}

export default Index;
