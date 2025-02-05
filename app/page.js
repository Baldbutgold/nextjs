import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = false;
  const name = "Dorthy";

  return (
    <main>
      <h1 className="title extra-space">
        Collect Customer Feedback to build better products
      </h1>
      <div>
        Create a Feedback board in minutes, prioritize features, and build
        products your customers will love.
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
    </main>
  );
}
