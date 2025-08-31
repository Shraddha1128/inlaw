//import React from "react"
import { BookOpen, Settings } from "lucide-react"

export default function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-8">InLaw</h1>
        <nav className="space-y-4">
          <button className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800">
            <BookOpen size={18} /> InLaw
          </button>
          <button className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800">
            <Settings size={18} /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-center">InLaw</h1>
        <p className="text-gray-400 text-center mb-6">
          AI Legal Research Assistant
        </p>

        <div className="grid grid-cols-3 gap-6">
          {/* Center Section */}
          <div className="col-span-2 space-y-4">
            {/* Popular Queries */}
            <h2 className="text-lg font-semibold">
              Popular Legal Queries
            </h2>
            <div className="space-y-2">
              <button className="w-full p-3 rounded bg-zinc-800 hover:bg-zinc-700">
                Can a person be arrested without a warrant in India?
              </button>
              <button className="w-full p-3 rounded bg-zinc-800 hover:bg-zinc-700">
                What are the rights of an accused under Article 20?
              </button>
              <button className="w-full p-3 rounded bg-zinc-800 hover:bg-zinc-700">
                Explain the concept of bail under CrPC
              </button>
              <button className="w-full p-3 rounded bg-zinc-800 hover:bg-zinc-700">
                What is the difference between cognizable and non-cognizable offences?
              </button>
            </div>
<br></br>
            {/* Description */}
            <div className="p-4 rounded bg-zinc-900 border border-zinc-700 text-gray-300 text-sm leading-relaxed">
              Welcome to InLaw! I'm your AI legal research assistant specialized in
              Indian law. <br />
              Ask me about constitutional provisions, criminal procedures, civil
              matters, or specific legal cases.
              <br></br>
            </div>
<br></br><br></br><br></br>
            {/* Input Box */}
            <div className="flex">
              <input
                className="flex-1 h-12 px-2 rounded-l-lg bg-zinc-800 border border-zinc-600 focus:outline-none"
                placeholder="Ask about Indian law, constitutional provisions, legal procedures..."
              />&nbsp;&nbsp;&nbsp;
              <button className="px-6 h-12 bg-indigo-600 rounded-r-lg hover:bg-indigo-700">
                Send
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700">
            <h3 className="text-lg font-semibold mb-4">Legal References</h3>
            <div className="flex gap-2 mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600">
                Export
              </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-700">
                Summarize
              </button>
            </div>
            {/* <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <span className="font-semibold">Criminal Procedure Code</span> <br />
                Statute 1973 <br />
                • Section 41 <br />
                • Section 42 <br />
                • Section 46
              </p>
              <p>
                <span className="font-semibold">Indian Constitution</span> <br />
                1950 — <span className="text-indigo-400">Article 22</span>
              </p>
              <p>
                <span className="font-semibold">Joginder Kumar v. State of UP</span> <br />
                1994 — <span className="text-indigo-400">Supreme Court Judgment</span>
              </p>
            </div> */}

            {/* <div className="mt-4 flex justify-between text-xs text-gray-500">
              <span>3 References</span>
              <span>2 High Priority</span>
              <span>5 Sections</span>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}
