import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Dorthy";
  const counter = 10;

  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-5xl mx-auto">
          <div className="font-bold">CodeFast SaaS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      <section className="px-8 text-center py-32 max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect Customer Feedback to build better products
        </h1>
        <div className="opacity-70 mb-10">
          Create a Feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
