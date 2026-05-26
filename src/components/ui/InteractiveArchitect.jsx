import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight, Server, Shield, Sparkles, Database, Laptop } from "lucide-react";

export function InteractiveArchitect({ project, onClose }) {
  const [activeNode, setActiveNode] = useState(null);
  const [dataFlowActive, setDataFlowActive] = useState(false);
  const [flowStep, setFlowStep] = useState(0);

  const flowLogs = [
    "1. Recruiter triggers action on React Client Dashboard.",
    "2. React sends HTTPS Request with Authorization Header to FastAPI Backend.",
    "3. FastAPI backend validates user session with Supabase API.",
    "4. FastAPI formats strict JSON schema prompt and performs LLM invocation.",
    "5. OpenAI processes prompt, filters injection vectors, and returns structured result.",
    "6. FastAPI captures structured response, logs request metrics to Supabase DB.",
    "7. Streamed / complete result is rendered instantly in React Dashboard UI."
  ];

  // Trigger continuous mock data flow when modal launches
  useEffect(() => {
    if (!dataFlowActive) return;
    const interval = setInterval(() => {
      setFlowStep((prev) => (prev + 1) % flowLogs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [dataFlowActive]);

  const nodes = [
    {
      id: "frontend",
      icon: <Laptop className="w-5 h-5 text-blue-400" />,
      label: "React Frontend",
      type: "Client Layer",
      desc: "Modern responsive UI built with Vite & Tailwind CSS. Integrates real-time visualizers and securely stores authorization tokens locally."
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      label: "FastAPI Backend",
      type: "Logic Controller",
      desc: "High-performance Python backend server exposing REST APIs, enforcing rate limiters, validating JWT payloads, and hosting prompt security filters."
    },
    {
      id: "llm",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      label: "LLM APIs (OpenRouter)",
      type: "AI Inference Engine",
      desc: "Retrieves structured JSON completions from leading frontier models (Claude-3.5, GPT-4o) using customized zero-shot prompt injection shields."
    },
    {
      id: "database",
      icon: <Database className="w-5 h-5 text-rose-400" />,
      label: "Supabase DB & Auth",
      type: "Database / Security",
      desc: "Postgres database executing secure row-level access control, persistent student profiles, and historical RAG chat embedding coordinates."
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-4xl glass rounded-2xl border border-white/10 overflow-hidden shadow-glass-md flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[680px]"
      >
        {/* Left Interactive Node Map */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 bg-zinc-950/20">
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display font-bold text-lg md:text-xl text-white">
                  System Architecture Explorer
                </h3>
                <p className="text-xs text-zinc-400 font-light">
                  Interactive schematic for {project.title}
                </p>
              </div>
              <button
                onClick={() => setDataFlowActive(!dataFlowActive)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                  dataFlowActive
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                }`}
              >
                <Play className="w-3 h-3" />
                <span>{dataFlowActive ? "Flow Active" : "Simulate Flow"}</span>
              </button>
            </div>

            {/* Grid Mapping Nodes */}
            <div className="relative py-12 flex flex-col items-center gap-8">
              {/* Animated Flow Overlay Line */}
              {dataFlowActive && (
                <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 opacity-60 pointer-events-none animate-pulse" />
              )}

              {nodes.map((node, i) => {
                const isSelected = activeNode?.id === node.id;
                return (
                  <div key={node.id} className="relative w-full max-w-sm">
                    {/* Node Element */}
                    <button
                      onClick={() => setActiveNode(node)}
                      className={`relative z-10 w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        isSelected
                          ? "bg-zinc-900 border-blue-500/50 shadow-glow-blue scale-[1.02]"
                          : "bg-zinc-950/60 border-white/5 hover:border-white/15"
                      }`}
                    >
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        {node.icon}
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-mono font-semibold uppercase text-zinc-500 tracking-wider">
                          {node.type}
                        </span>
                        <h4 className="font-display font-bold text-sm text-white">
                          {node.label}
                        </h4>
                      </div>
                      {/* Interactive glowing signal dot */}
                      {dataFlowActive && Math.floor(flowStep / 2.2) === i && (
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      )}
                    </button>

                    {/* Connecting line indicators */}
                    {i < nodes.length - 1 && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-6 flex items-center justify-center pointer-events-none">
                        <ArrowRight className="w-4 h-4 text-zinc-700 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-[10px] text-zinc-500 text-center font-light mt-4">
            Click on any module node above to inspect structural responsibilities.
          </p>
        </div>

        {/* Right Details Panel */}
        <div className="w-full md:w-[320px] p-6 md:p-8 flex flex-col justify-between bg-zinc-950/40">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                INSPECTOR
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
                    {activeNode.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase">
                      {activeNode.type}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white mt-1">
                      {activeNode.label}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-400 font-light">
                    {activeNode.desc}
                  </p>
                </motion.div>
              ) : (
                <div className="text-zinc-500 text-xs py-8 font-light text-center">
                  Select a system node on the left to review documentation & design.
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Real-time Simulated flow terminal logs */}
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-1.5 mb-3 text-xs font-mono font-semibold uppercase text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Simulated Event Logs</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-950 border border-white/5 font-mono text-[9px] leading-relaxed text-zinc-400 min-h-[92px] flex items-center">
              {dataFlowActive ? (
                <p className="text-emerald-400 animate-pulse">{flowLogs[flowStep]}</p>
              ) : (
                <p className="text-zinc-500">
                  Enable 'Simulate Flow' above to run request/response tracking logs.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default InteractiveArchitect;
