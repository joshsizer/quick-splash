export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hi! My name is Josh and this website is coming soon!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Stay tuned for something amazing.
        </p>
      </main>
    </div>
  );
}
