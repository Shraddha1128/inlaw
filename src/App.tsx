import { useState } from "react"
import { BookOpen, ChartBar, HistoryIcon, Search, Settings } from "lucide-react"
//import { ChatBubbleIcon } from "@radix-ui/react-icons";
import SettingsPage from "./SettingsPage";

export default function App() {
  const [query, setQuery] = useState("")
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([])
  const [history, setHistory] = useState<{ file: string; preview: string }[]>([])
  const [summary, setSummary] = useState("")
  const [activeTab, setActiveTab] = useState("inlaw")
  const [conversationHistory, setConversationHistory] = useState<
    { sender: string; text: string }[][]
  >([])
  const [expanded, setExpanded] = useState<number | null>(null)

  // Popular queries
  const queries = [
    "Can a person be arrested without a warrant in India?",
    "What are the rights of an accused under Article 20?",
    "Explain the concept of bail under CrPC",
    "What is the difference between cognizable and non-cognizable offences?",
  ]

  // Handle send
  const handleSend = async () => {
    if (!query.trim()) return
    setChat((prev) => [...prev, { sender: "You", text: query }])

    setTimeout(() => {
      const response = `Answer to: ${query}\n\nThis is a detailed explanation based on Indian law...`
      setChat((prev) => [...prev, { sender: "AI", text: response }])
    }, 600)

    setQuery("")
  }

  // Save conversation when moving to History
  const handleSaveConversation = () => {
    if (chat.length > 0) {
      setConversationHistory((prev) => [...prev, chat])
      setChat([])
    }
  }

  // Handle Export
  const handleExport = () => {
    const lastAI = [...chat].reverse().find((msg) => msg.sender === "AI")
    if (lastAI) {
      const fileName = `legal_answer_${history.length + 1}.txt`
      const blob = new Blob([lastAI.text], { type: "text/plain" })
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = fileName
      link.click()

      const preview = lastAI.text.split(" ").slice(0, 12).join(" ") + "..."
      setHistory((prev) => [...prev, { file: fileName, preview }])
    }
  }

  // Handle Summarize
  const handleSummarize = async () => {
    if (chat.length === 0) return
    const fullText = chat.map((c) => `${c.sender}: ${c.text}`).join("\n")
    const short =
      fullText.split(". ").slice(0, 2).join(". ") +
      (fullText.includes(".") ? "." : "")
    setSummary(short)
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-8">InLaw</h1>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("inlaw")}
            className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800"
          >
            <BookOpen size={18} /> InLaw
          </button>
          <button
            onClick={() => {
              handleSaveConversation()
              setActiveTab("newchat")
            }}
            className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800"
          >
            <ChartBar size={18} /> New Chat
          </button>
          <button
            onClick={() => {
              handleSaveConversation()
              setActiveTab("searchchat")
            }}
            className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800"
          >
            <Search size={18} /> Search Chat
          </button>
          <button
            onClick={() => {
              handleSaveConversation()
              setActiveTab("history")
            }}
            className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800"
          >
            <HistoryIcon size={18} /> History
          </button>
          <button
            onClick={() => {
              handleSaveConversation()
              setActiveTab("settings")
            }}
            className="flex items-center gap-2 w-full text-left p-2 rounded hover:bg-zinc-800"
          >
            <Settings size={18} /> Setting
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* InLaw Section */}
        {activeTab === "inlaw" && (
          <>
            <h1 className="text-2xl font-bold text-center">InLaw</h1>
            <p className="text-gray-400 text-center mb-6">
              AI Legal Research Assistant
            </p>

            <div className="grid grid-cols-3 gap-6">
              {/* Chat Section */}
              <div className="col-span-2 space-y-4">
                <h2 className="text-lg font-semibold">Popular Legal Queries</h2>
                <div className="space-y-2">
                  {queries.map((q, i) => (
                    <button
                      key={i}
                      className="w-full p-3 rounded bg-zinc-800 hover:bg-zinc-700 text-left"
                      onClick={() => setQuery(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Chat */}
                <div className="p-4 rounded bg-zinc-900 border border-zinc-700 h-80 overflow-y-auto space-y-3">
                  {chat.length === 0 ? (
                    <p className="text-gray-400 text-sm">Start a conversation...</p>
                  ) : (
                    chat.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-xl max-w-xs whitespace-pre-line ${
                          msg.sender === "You"
                            ? "bg-indigo-600 ml-auto text-right"
                            : "bg-zinc-800 mr-auto text-left"
                        }`}
                      >
                        <p className="text-xs text-gray-300">{msg.sender}</p>
                        <p className="mt-1">{msg.text}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Input */}
                <div className="flex">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 h-12 px-3 rounded-l-lg bg-zinc-800 border border-zinc-600 focus:outline-none"
                    placeholder="Ask about Indian law, constitutional provisions, legal procedures..."
                  />
                  <button
                    onClick={handleSend}
                    className="px-6 h-12 bg-indigo-600 rounded-r-lg hover:bg-indigo-700"
                  >
                    Send
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-span-1 p-4 rounded-xl bg-zinc-900 border border-zinc-700 space-y-4">
                <h3 className="text-lg font-semibold">Legal References</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleExport}
                    className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    Export
                  </button>
                  <button
                    onClick={handleSummarize}
                    className="px-3 py-1 bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Summarize
                  </button>
                </div>

                {/* Export History */}
                <div className="p-3 mt-4 rounded bg-zinc-800 border border-zinc-700 h-40 overflow-y-auto">
                  <h4 className="font-semibold text-sm mb-2">Export History</h4>
                  {history.length === 0 ? (
                    <p className="text-gray-400 text-xs">No history yet.</p>
                  ) : (
                    history.map((item, i) => (
                      <div
                        key={i}
                        className="p-2 mb-2 rounded bg-zinc-900 border border-zinc-700 text-xs text-gray-300"
                      >
                        <p className="font-semibold">{item.file}</p>
                        <p className="text-gray-400">{item.preview}</p>
                      </div>
                    ))
                  )}
                </div>

                {/* Summary Section */}
                {summary && (
                  <div className="p-3 mt-4 rounded bg-zinc-800 border border-zinc-700 text-sm text-gray-300">
                    <h4 className="font-semibold mb-1">Conversation Summary</h4>
                    <p>{summary}</p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

                {/* History Section */}
        {activeTab === "history" && (
          <div>
            <h1 className="text-2xl font-bold mb-6">Conversation History</h1>
            {conversationHistory.length === 0 ? (
              <p className="text-gray-400">No past conversations yet.</p>
            ) : (
              <div className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                {conversationHistory.map((conv, idx) => {
                  const isOpen = expanded === idx
                  const preview = conv
                    .map((m) => `${m.sender}: ${m.text}`)
                    .join(" ")
                    .slice(0, 100)

                  return (
                    <div
                      key={idx}
                      className="p-4 border border-zinc-700 rounded-lg bg-zinc-900"
                    >
                      <div
                        className="cursor-pointer flex justify-between items-center"
                        onClick={() => setExpanded(isOpen ? null : idx)}
                      >
                        <h2 className="font-semibold">
                          Conversation {idx + 1}
                        </h2>
                        <span className="text-sm text-gray-400">
                          {isOpen ? "Hide" : "Show"}
                        </span>
                      </div>

                      {!isOpen && (
                        <p className="text-gray-400 text-sm mt-2">
                          {preview}...
                        </p>
                      )}

                      {isOpen && (
                        <div className="mt-3 space-y-2">
                          {conv.map((msg, i) => (
                            <div
                              key={i}
                              className={`p-2 rounded-lg max-w-xs ${
                                msg.sender === "You"
                                  ? "bg-indigo-600 text-white ml-auto"
                                  : "bg-gray-200 text-black"
                              }`}
                            >
                              <p className="text-xs">{msg.sender}</p>
                              <p>{msg.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Settings Section */}
        {activeTab === "settings" && <SettingsPage />}

      </main>
    </div>
  )
}
