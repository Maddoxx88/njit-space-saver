export default function Home() {
  return (
    <main className="flex text-black min-h-screen flex-col items-center justify-between p-24">
      <div>NJIT Space Saver</div>
      <div className="p-8 bg-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            1
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            2
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            3
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            4
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            5
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            6
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            7
          </div>
          <div className="p-4 bg-red-500 rounded-md flex items-center justify-center">
            8
          </div>
        </div>
      </div>
    </main>
  );
}
