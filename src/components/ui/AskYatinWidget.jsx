import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react";

export function AskYatinWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi there! I am Yatin's simulated AI Assistant. Ask me anything about his technical projects, solutioning internship, research, or direct contact details!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const quickQuestions = [
    { label: "⚡ Core Tech Stack", query: "tech stack" },
    { label: "💼 HCLTech Internship", query: "internship" },
    { label: "🚀 Main Projects", query: "projects" },
    { label: "📞 Get In Touch", query: "contact" }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Formulate response
    setTimeout(() => {
      let botResponse = "";
      const query = text.toLowerCase();

      if (query.includes("tech") || query.includes("stack") || query.includes("skills")) {
        botResponse = "Yatin specializes in AI & Software Engineering. His core languages include Python, Java, and SQL. On the web side, he builds with React, FastAPI, Node.js, and Supabase. His AI expertise spans OpenAI APIs, Prompt Engineering, RAG frameworks, LLMs, and Embeddings.";
      } else if (query.includes("intern") || query.includes("hcl") || query.includes("work")) {
        botResponse = "Yatin interned as a Solutioning Intern at HCLTech (Jan - Apr 2026). He designed advanced prompt engineering patterns, built vector embedding RAG pipelines to optimize internal data search, and conducted cybersecurity audits that secured LLM interfaces against prompt injections.";
      } else if (query.includes("project") || query.includes("ai tutor") || query.includes("build")) {
        botResponse = "Yatin's strongest project is the 'AI Tutor & Student Support System', using FastAPI, React, Supabase, and OpenAI APIs. He also engineered a MERN + Socket.io 'Real-Time Chat Application' for low-latency chat interactions.";
      } else if (query.includes("contact") || query.includes("email") || query.includes("phone")) {
        botResponse = "You can contact Yatin directly! Email him at yatinberry201@gmail.com, or call +91-8375956537. He is open to Software and AI Engineer roles, and would love to chat.";
      } else if (query.includes("hire") || query.includes("resume") || query.includes("cv")) {
        botResponse = "Yatin is a perfect fit for engineering teams looking for strong backend foundations and modern AI capability. You can download his CV directly from the Hero section, or shoot an email to yatinberry201@gmail.com to schedule an interview!";
      } else {
        botResponse = "That's an interesting question! I am optimized to discuss Yatin's credentials. Feel free to click on one of the quick buttons below, or email him at yatinberry201@gmail.com for comprehensive answers!";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {/* Floating Trigger Sparkle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:bg-blue-500 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Ask Yatin AI"
        >
          <span className="absolute inset-0 rounded-full border border-blue-400/40 animate-pulse" />
          <Bot className="w-6 h-6 group-hover:rotate-[10deg] transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-[8px] font-bold uppercase tracking-wider text-black flex items-center gap-0.5">
            <Sparkles className="w-2 h-2 fill-black" />
            <span>AI</span>
          </div>
        </button>
      )}

      {/* Chat Widget Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[360px] h-[500px] rounded-2xl glass border border-white/10 shadow-glass-md flex flex-col justify-between overflow-hidden animate-fade-in-up">
          {/* Header Panel */}
          <div className="p-4 border-b border-white/5 bg-zinc-950/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-xs text-white flex items-center gap-1.5">
                  Ask Yatin AI
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_6px_#10b981]" />
                </h4>
                <p className="text-[10px] text-zinc-500 font-light">Custom Assistant Bot</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages Display Board */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, i) => {
              const isBot = msg.sender === "bot";
              return (
                <div key={i} className={`flex items-start gap-2.5 ${!isBot && "flex-row-reverse"}`}>
                  <div
                    className={`p-1.5 rounded-lg border text-zinc-300 ${
                      isBot
                        ? "bg-zinc-900 border-white/5 text-blue-400"
                        : "bg-blue-600/10 border-blue-500/25 text-blue-300"
                    }`}
                  >
                    {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-xl text-xs max-w-[78%] leading-relaxed ${
                      isBot
                        ? "bg-zinc-900/50 border border-white/5 text-zinc-300 font-light"
                        : "bg-blue-600 text-white font-medium shadow-[0_2px_8px_rgba(59,130,246,0.15)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {/* Typing visualizer */}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-white/5 text-blue-400">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="px-3 py-2 rounded-xl bg-zinc-900/50 border border-white/5 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          {/* Interaction Suggestions and input block */}
          <div className="p-3 border-t border-white/5 bg-zinc-950/40 space-y-3">
            {/* Quick action chips */}
            <div className="flex flex-wrap gap-1.5">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(q.query)}
                  className="px-2 py-1 rounded-full text-[9px] font-medium border border-white/5 hover:border-blue-500/25 bg-zinc-900/40 hover:bg-blue-500/5 text-zinc-400 hover:text-blue-400 transition-all"
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Typing box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask something..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-zinc-950 border border-white/5 hover:border-white/10 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 text-xs text-white placeholder-zinc-500 outline-none transition-all"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
export default AskYatinWidget;
