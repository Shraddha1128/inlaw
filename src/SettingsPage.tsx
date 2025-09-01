import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general")

  // General states
  const [theme, setTheme] = useState("System")
  const [accent, setAccent] = useState("Default")
  const [language] = useState("Auto-detect")
  const [spokenLanguage] = useState("Auto-detect")
  const [voice, setVoice] = useState("Vale")
  const [followUps, setFollowUps] = useState(true)

  // Notifications states
  const [responseNotif, setResponseNotif] = useState("Push")
  const [taskNotif, setTaskNotif] = useState("Push, Email")

  // Personalization
  const [savedMemories, setSavedMemories] = useState(true)
  const [chatHistory, setChatHistory] = useState(true)

  // Connected apps
  const [googleDrive, setGoogleDrive] = useState(false)
  const [oneDrivePersonal, setOneDrivePersonal] = useState(false)
  const [oneDriveWork, setOneDriveWork] = useState(false)

  // Data controls
  const [shareData, setShareData] = useState(false)
  const handleArchiveAll = () => alert("All chats archived!")
const handleDeleteAll = () => alert("All chats deleted!")
const handleExportData = () => alert("Data exported!")
const handleLogout = () => alert("Logged out!")
const handleLogoutAll = () => alert("Logged out from all devices!")

  // Security
  const [twoFactor, setTwoFactor] = useState(false)

  // Account
  const [email, setEmail] = useState("user@example.com")
  const [username, setUsername] = useState("shraddha")

  const sections = [
    { id: "general", label: "General" },
    { id: "notifications", label: "Notifications" },
    { id: "personalization", label: "Personalization" },
    { id: "connected", label: "Connected apps" },
    { id: "data", label: "Data controls" },
    { id: "security", label: "Security" },
    { id: "account", label: "Account" },
  ]

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6 bg-zinc-900">
        <h2 className="text-xl font-bold mb-6">Settings</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection === section.id
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-zinc-800 text-gray-300"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-8">
        {/* GENERAL */}
        {activeSection === "general" && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">General</h3>
            {/* Theme */}
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Theme</span>
              <button
                className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded"
                onClick={() =>
                  setTheme(theme === "System" ? "Light" : theme === "Light" ? "Dark" : "System")
                }
              >
                {theme} <ChevronDown size={16} />
              </button>
            </div>
            {/* Accent */}
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Accent color</span>
              <button
                className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded"
                onClick={() =>
                  setAccent(accent === "Default" ? "Blue" : accent === "Blue" ? "Green" : "Default")
                }
              >
                {accent} <ChevronDown size={16} />
              </button>
            </div>
            {/* Language */}
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Language</span>
              <span>{language}</span>
            </div>
            {/* Spoken language */}
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Spoken language</span>
              <span>{spokenLanguage}</span>
            </div>
            {/* Voice */}
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Voice</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-indigo-600 rounded">Play</button>
                <button className="flex items-center gap-2 bg-zinc-800 px-3 py-1 rounded">
                  {voice} <ChevronDown size={16} />
                </button>
              </div>
            </div>
            {/* Toggle */}
            <div className="flex justify-between items-center py-4">
              <span>Show follow up suggestions</span>
              <input
                type="checkbox"
                checked={followUps}
                onChange={() => setFollowUps(!followUps)}
              />
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeSection === "notifications" && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Notifications</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-zinc-800 py-4">
                <span>Responses</span>
                <select
                  value={responseNotif}
                  onChange={(e) => setResponseNotif(e.target.value)}
                  className="bg-zinc-800 p-1 rounded"
                >
                  <option>Push</option>
                  <option>Email</option>
                  <option>None</option>
                </select>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 py-4">
                <span>Tasks</span>
                <select
                  value={taskNotif}
                  onChange={(e) => setTaskNotif(e.target.value)}
                  className="bg-zinc-800 p-1 rounded"
                >
                  <option>Push</option>
                  <option>Email</option>
                  <option>Push, Email</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* PERSONALIZATION */}
        {activeSection === "personalization" && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Personalization</h3>
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Reference saved memories</span>
              <input
                type="checkbox"
                checked={savedMemories}
                onChange={() => setSavedMemories(!savedMemories)}
              />
            </div>
            <div className="flex justify-between items-center py-4 border-b border-zinc-800">
              <span>Reference chat history</span>
              <input
                type="checkbox"
                checked={chatHistory}
                onChange={() => setChatHistory(!chatHistory)}
              />
            </div>
            <div className="flex justify-between items-center py-4">
              <span>Manage memories</span>
              <button className="px-3 py-1 rounded bg-zinc-800">Manage</button>
            </div>
            
           
          </div>
        )}

        {/* CONNECTED APPS */}
        {activeSection === "connected" && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connected Apps</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 py-4">
                <span>Google Drive</span>
                <button
                  onClick={() => setGoogleDrive(!googleDrive)}
                  className="px-3 py-1 rounded bg-zinc-800"
                >
                  {googleDrive ? "Disconnect" : "Connect"}
                </button>
              </div>
              <div className="flex justify-between items-center border-b border-zinc-800 py-4">
                <span>Microsoft OneDrive (personal)</span>
                <button
                  onClick={() => setOneDrivePersonal(!oneDrivePersonal)}
                  className="px-3 py-1 rounded bg-zinc-800"
                >
                  {oneDrivePersonal ? "Disconnect" : "Connect"}
                </button>
              </div>
              <div className="flex justify-between items-center py-4">
                <span>Microsoft OneDrive (work/school)</span>
                <button
                  onClick={() => setOneDriveWork(!oneDriveWork)}
                  className="px-3 py-1 rounded bg-zinc-800"
                >
                  {oneDriveWork ? "Disconnect" : "Connect"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DATA CONTROLS */}
{activeSection === "data" && (
  <div>
    <h3 className="text-2xl font-semibold mb-6">Data Controls</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Improve the model for everyone</span>
        <input
          type="checkbox"
          checked={shareData}
          onChange={() => setShareData(!shareData)}
          className="w-5 h-5"
        />
      </div>
      <div className="flex justify-between">
        <span>Shared links</span>
        <button className="px-2 py-1 border rounded">Manage</button>
      </div>
      <div className="flex justify-between">
        <span>Archived chats</span>
        <button className="px-2 py-1 border rounded">Manage</button>
      </div>
      <div className="flex justify-between">
        <span>Archive all chats</span>
        <button
          className="px-2 py-1 border rounded"
          onClick={handleArchiveAll}
        >
          Archive all
        </button>
      </div>
      <div className="flex justify-between">
        <span>Delete all chats</span>
        <button
          className="px-2 py-1 border rounded text-red-500"
          onClick={handleDeleteAll}
        >
          Delete all
        </button>
      </div>
      <div className="flex justify-between">
        <span>Export data</span>
        <button
          className="px-2 py-1 border rounded"
          onClick={handleExportData}
        >
          Export
        </button>
      </div>
    </div>
  </div>
)}

{/* SECURITY */}
{activeSection === "security" && (
  <div>
    <h3 className="text-2xl font-semibold mb-6">Security</h3>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>Multi-factor authentication</span>
        <input
          type="checkbox"
          checked={twoFactor}
          onChange={() => setTwoFactor(!twoFactor)}
          className="w-5 h-5"
        />
      </div>
      <div className="flex justify-between">
        <span>Log out of this device</span>
        <button
          className="px-2 py-1 border rounded"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      <div className="flex justify-between">
        <span>Log out of all devices</span>
        <button
          className="px-2 py-1 border rounded text-red-500"
          onClick={handleLogoutAll}
        >
          Log out all
        </button>
      </div>
    </div>
  </div>
)}


        {/* ACCOUNT */}
        {activeSection === "account" && (
  <div>
    <h3 className="text-2xl font-semibold mb-6">Account</h3>
    <div className="space-y-6">
      {/* Links */}
      <div>
        <h4 className="font-semibold mb-2">Links</h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>LinkedIn</span>
            <button className="px-3 py-1 border rounded">Add</button>
          </div>
          <div className="flex justify-between items-center">
            <span>GitHub</span>
            <button className="px-3 py-1 border rounded">Add</button>
          </div>
          <div className="flex justify-between items-center">
            <span>X</span>
            <button className="px-3 py-1 border rounded">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      </main>
    </div>
  )
}
