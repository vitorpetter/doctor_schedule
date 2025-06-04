import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg text-gray-700">This is a simple Next.js app with Tailwind CSS.</p>
      <Button>Bootcamp</Button>
    </div>
    </>
  );
}

export default Home;
