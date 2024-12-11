import Image from "next/image";

export default function Home() {
  return (
   <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg mb-8">
        Explore the features and enjoy a seamless experience.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:bg-gray-100 transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
          Learn More
        </button>
      </div>
      <Image
        src="/hero.webp" // Replace with your actual image path
        alt="Hero Illustration"
        width={400}
        height={300}
        className="mt-10 rounded-md shadow-lg"
      />
    </main>

   </>
  );
}
