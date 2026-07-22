"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Sparkles,
  FileText,
  Users,
  Star,
  Settings,
  Menu,
  X,
  TrendingUp,
  PhoneCall,
  MessageSquare,
  CheckCircle2,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const NAVIGATION_ITEMS = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard, current: true },
  { name: "Generate Pages", href: "/admin/seo", icon: Sparkles, current: false },
  { name: "Blogs", href: "#blogs", icon: FileText, current: false },
  { name: "Leads", href: "#leads", icon: Users, current: false },
  { name: "Reviews", href: "#reviews", icon: Star, current: false },
  { name: "Settings", href: "#settings", icon: Settings, current: false },
];

const RECENT_LEADS = [
  { id: "LD-104", name: "Srinivasan R.", phone: "+91 98401 23456", service: "Invisible Grills", area: "Velachery", status: "NEW", date: "10 mins ago" },
  { id: "LD-103", name: "Anand Kumar", phone: "+91 98840 98765", service: "Pigeon Nets", area: "Anna Nagar", status: "ASSIGNED", date: "1 hour ago" },
  { id: "LD-102", name: "Meenakshi S.", phone: "+91 94441 55432", service: "Cloth Hangers", area: "Tambaram", status: "COMPLETED", date: "3 hours ago" },
  { id: "LD-101", name: "Karthik Raja", phone: "+91 97908 11223", service: "Bird Nets", area: "OMR IT Corridor", status: "COMPLETED", date: "5 hours ago" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#0A1218] text-white flex">
      
      {/* Mobile Sidebar Back-drop overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
        />
      )}

      {/* Sidebar Navigation Drawer */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0D1821] border-r border-white/10 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo Header */}
          <div className="h-20 px-6 border-b border-white/10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2E86FF] to-[#F2A93B] flex items-center justify-center font-bold text-white text-xs shadow-lg">
                GE
              </div>
              <span className="font-extrabold text-sm tracking-wider uppercase text-white">
                Golden Admin
              </span>
            </Link>

            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-[#9AA5AD]">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-[#2E86FF] text-white shadow-[0_0_20px_rgba(46,134,255,0.4)]"
                      : "text-[#9AA5AD] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="p-4 border-t border-white/10 text-[11px] text-[#9AA5AD]">
          <span className="block font-bold text-white">Golden Enterprises</span>
          <span>Chennai Local SEO Platform</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-20 px-6 bg-[#0D1821]/80 border-b border-white/10 flex items-center justify-between backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-[#9AA5AD] hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-extrabold uppercase text-white tracking-wider">
              {activeTab} Overview
            </h2>
          </div>

          <Link
            href="/admin/seo"
            className="px-5 py-2.5 rounded-full bg-[#2E86FF] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(46,134,255,0.4)] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Page Generator</span>
          </Link>
        </header>

        {/* Dashboard Body */}
        <main className="p-6 sm:p-8 space-y-8 flex-1 overflow-y-auto">
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[#2E86FF]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AD]">Total Local Pages</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-3xl font-mono font-extrabold text-white">107</div>
              <p className="text-[11px] text-[#25D366] flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+12 pages this week</span>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[#2E86FF]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AD]">Total Inquiries</span>
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-3xl font-mono font-extrabold text-white">142</div>
              <p className="text-[11px] text-[#25D366] flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+18% conversion rate</span>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[#25D366]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AD]">WhatsApp Chats</span>
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-3xl font-mono font-extrabold text-white">89</div>
              <p className="text-[11px] text-[#25D366] flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>High conversion intent</span>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1821] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[#F2A93B]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9AA5AD]">Estimated Revenue</span>
                <Star className="w-4 h-4 fill-[#F2A93B]" />
              </div>
              <div className="text-3xl font-mono font-extrabold text-white">₹4,85,000</div>
              <p className="text-[11px] text-[#25D366] flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>Completed installations</span>
              </p>
            </div>
          </div>

          {/* Recent Leads Management Table */}
          <div className="p-6 rounded-3xl bg-[#0D1821] border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold uppercase text-white">Recent Customer Inquiries & Leads</h3>
                <p className="text-xs text-[#9AA5AD]">Real-time quote requests from Chennai balcony safety pages</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#2E86FF]/20 text-[#2E86FF] text-xs font-bold uppercase">
                4 New Today
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-[#9AA5AD] uppercase font-bold text-[11px]">
                    <th className="py-3 px-4">Lead ID</th>
                    <th className="py-3 px-4">Customer Name</th>
                    <th className="py-3 px-4">Phone Number</th>
                    <th className="py-3 px-4">Service</th>
                    <th className="py-3 px-4">Locality</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {RECENT_LEADS.map((lead) => (
                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 font-mono font-bold text-[#2E86FF]">{lead.id}</td>
                      <td className="py-4 px-4 font-bold text-white">{lead.name}</td>
                      <td className="py-4 px-4 font-mono text-[#C7CDD3]">{lead.phone}</td>
                      <td className="py-4 px-4 font-semibold text-white">{lead.service}</td>
                      <td className="py-4 px-4 text-[#C7CDD3]">{lead.area}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            lead.status === "NEW"
                              ? "bg-[#2E86FF]/20 text-[#2E86FF]"
                              : lead.status === "ASSIGNED"
                              ? "bg-[#F2A93B]/20 text-[#F2A93B]"
                              : "bg-[#25D366]/20 text-[#25D366]"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[#9AA5AD]">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
