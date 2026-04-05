import React, {useState} from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "executive",
    "zones",
    "staffing",
    "workflow",
    "programs",
    "demo",
    "print to PDF",
    "contact"
  ];

  return (
    <>
      {/* Toggle button */}
      <button 
        className="fixed top-4 left-2 z-50 bg-black/70 backdrop-blur-sm text-white px-1 py-1 rounded"
        onClick={() => setOpen(!open)}
      >
        <Menu className="w-4 h-4 text-white" />
      </button>

      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/30 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 z-40
        bg-black/30 backdrop-blur-md text-white p-4
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform
      `}>
        <h2 className="text-lg font-semibold mb-4 ml-12">
          Snoozeville Report
        </h2>

        <nav className="space-y-2 ml-12">
          {menuItems.map(item => (
            <a 
              key={item}
              href={`#${item}`}
              className="block hover:text-blue-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;