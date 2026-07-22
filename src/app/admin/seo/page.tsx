"use client";

import { useState, useEffect } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Sparkles, CheckCircle2, Database, Share2, MessageSquare, Mail, Image as ImageIcon, FileText, Layers, Play, RefreshCw, Clock } from "lucide-react";

const SERVICES_LIST = [
  { slug: "safety-nets", name: "Pigeon & Balcony Safety Nets" },
  { slug: "invisible-grills", name: "316 Stainless Steel Invisible Grills" },
  { slug: "cloth-hangers", name: "Ceiling Cloth Drying Hangers" },
  { slug: "mosquito-mesh", name: "Window Mosquito Mesh Screens" },
  { slug: "bird-nets", name: "Bird Nets & Pigeon Deterrents" },
];

const AREAS_LIST = [
  { slug: "velachery", name: "Velachery" },
  { slug: "anna-nagar", name: "Anna Nagar" },
  { slug: "omr", name: "OMR IT Corridor" },
  { slug: "tambaram", name: "Tambaram" },
  { slug: "porur", name: "Porur" },
  { slug: "perungudi", name: "Perungudi" },
  { slug: "medavakkam", name: "Medavakkam" },
  { slug: "sholinganallur", name: "Sholinganallur" },
  { slug: "adyar", name: "Adyar" },
  { slug: "ecr", name: "ECR Road" },
];

interface QueueItem {
  id: string;
  service: string;
  area: string;
  status: "QUEUED" | "PROCESSING" | "VALIDATED" | "SAVED" | "COMPLETED";
}

export default function SeoAdminStudio() {
  const [selectedService, setSelectedService] = useState("safety-nets");
  const [selectedArea, setSelectedArea] = useState("velachery");
  const [queueItems, setQueueItems] = useState<QueueItem[]>([]);
  const [isQueueRunning, setIsQueueRunning] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  // Queue All 100 Combinations (20 areas x 5 services)
  const handleQueueAllPages = () => {
    const newItems: QueueItem[] = [];
    let idCounter = 1;

    for (const service of SERVICES_LIST) {
      for (const area of AREAS_LIST) {
        newItems.push({
          id: `job-${idCounter++}`,
          service: service.name,
          area: area.name,
          status: "QUEUED",
        });
      }
    }

    setQueueItems(newItems);
    setCompletedCount(0);
  };

  // Process Background Queue sequentially with worker thread simulation
  const startWorkerQueue = () => {
    if (queueItems.length === 0) handleQueueAllPages();
    setIsQueueRunning(true);
  };

  useEffect(() => {
    if (!isQueueRunning || queueItems.length === 0) return;

    const interval = setInterval(() => {
      setQueueItems((prev) => {
        const next = [...prev];
        const queuedIndex = next.findIndex((item) => item.status === "QUEUED");
        const processingIndex = next.findIndex((item) => item.status === "PROCESSING");

        if (processingIndex !== -1) {
          next[processingIndex].status = "COMPLETED";
          setCompletedCount((c) => c + 1);
        }

        if (queuedIndex !== -1) {
          next[queuedIndex].status = "PROCESSING";
        } else if (processingIndex === -1) {
          setIsQueueRunning(false);
          clearInterval(interval);
        }

        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isQueueRunning, queueItems]);

  const progressPercentage = queueItems.length > 0
    ? Math.round((completedCount / queueItems.length) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-[#0A1218] text-white">
      <Header />

      <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E86FF]/20 border border-[#2E86FF] flex items-center justify-center text-[#2E86FF]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
                SaaS Background Job Queue Studio
              </h1>
              <p className="text-xs text-[#9AA5AD]">Parallel Background Worker Queue for 100+ SEO Page Batch Processing</p>
            </div>
          </div>

          <button
            onClick={handleQueueAllPages}
            className="px-6 py-3 rounded-full bg-[#0D1821] border border-white/10 text-xs font-bold uppercase hover:border-[#2E86FF] transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4 text-[#2E86FF]" />
            <span>Load 50 Locality Jobs to Queue</span>
          </button>
        </div>

        {/* Worker Controls & Progress Bar */}
        <div className="p-8 rounded-3xl bg-[#0D1821] border border-white/10 shadow-2xl mb-10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white uppercase">Queue Worker Status</h3>
              <p className="text-xs text-[#9AA5AD]">
                {completedCount} of {queueItems.length} Pages Processed ({progressPercentage}%)
              </p>
            </div>

            <button
              onClick={startWorkerQueue}
              disabled={isQueueRunning}
              className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl ${
                isQueueRunning
                  ? "bg-[#2E86FF]/50 text-white animate-pulse"
                  : "bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white hover:scale-105 transition-transform"
              }`}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isQueueRunning ? "Background Workers Processing..." : "Start Batch Queue Workers"}</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-[#0A1218] rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-[#2E86FF] to-[#25D366] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Real-time Job Queue Items Grid */}
        <div className="p-8 rounded-3xl bg-[#0D1821] border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
            Active Job Queue ({queueItems.length} Tasks)
          </h3>

          <div className="max-h-96 overflow-y-auto space-y-2 pr-2">
            {queueItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#0A1218] border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[#9AA5AD] text-[10px]">{item.id}</span>
                  <span className="font-bold text-white">{item.service}</span>
                  <span className="text-[#9AA5AD]">in</span>
                  <span className="font-semibold text-[#2E86FF]">{item.area}</span>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    item.status === "COMPLETED"
                      ? "bg-[#25D366]/20 text-[#25D366]"
                      : item.status === "PROCESSING"
                      ? "bg-[#2E86FF]/20 text-[#2E86FF] animate-pulse"
                      : "bg-white/5 text-[#9AA5AD]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
