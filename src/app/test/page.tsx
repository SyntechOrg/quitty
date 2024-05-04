import React from 'react';
import './page.css';

const Page = () => {
  return (
    <main className="flex min-h-screen bg-black max-w-full overflow-x-hidden">
      <div className="border border-blue-300 h-[200px] w-[300px] rounded-lg mt-10 mx-auto">
          <h3 className="text-white font-medium text-xl text-center bg-red-500 p-10 relative z-10 rounded-lg">
            SynTech is your future!
          </h3>
      </div>
      <div id="blob"></div>
      <script src="script2.js"></script>
    </main>
  );
};

export default Page;
