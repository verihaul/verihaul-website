import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, TrendingUp, Users, Zap, Lock, Network } from 'lucide-react';

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  const slides = [
    {
      title: "VeriHaul",
      subtitle: "",
      content: (
        <div className="text-center space-y-8">
          <p className="text-4xl text-cyan-300 font-semibold">Global freight. Verified.</p>
          <div className="space-y-2 text-xl text-gray-300 mt-12">
            <p><strong>Founder:</strong> Angella Hallgren, CEO</p>
            <p><strong>Stage:</strong> Pre-Seed</p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "The Problem",
      subtitle: "$500M+ Lost Annually to Cargo Fraud",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-900 bg-opacity-30 border-l-4 border-red-400 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-red-300">$500M+</div>
              <p className="text-gray-200 mt-2">Annual cargo theft in the U.S.</p>
            </div>
            <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-orange-300">700K+</div>
              <p className="text-gray-200 mt-2">Active carriers without verified identity</p>
            </div>
          </div>
          <div className="space-y-3 text-gray-200">
            <p><strong>• Shipments lack verified identity</strong> — no way to authenticate carriers in real-time</p>
            <p><strong>• Fake carriers & double brokering</strong> exploit manual verification gaps</p>
            <p><strong>• Manual processes are slow & unreliable</strong> — decisions made on incomplete data</p>
            <p><strong>• Fraud detection happens too late</strong> — after cargo is already stolen</p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Our Solution",
      subtitle: "AI-Powered Verification Backbone",
      content: (
        <div className="space-y-6">
          <p className="text-gray-200 text-lg">VeriHaul is the AI-powered verification backbone for global freight. We authenticate carriers, analyze behavioral data, and score risk in real time—before fraud happens.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20 hover:border-opacity-40 transition">
              <div className="font-bold text-cyan-300 mb-2">🎯 Multi-Factor Identity Verification</div>
              <p className="text-sm text-gray-200">VeriHaul cross-validates business filings, DOT/MC numbers, insurance status, social presence, and ELD signals. AI detects anomalies, impersonations, and spoofing attempts instantly—before they cause damage.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20 hover:border-opacity-40 transition">
              <div className="font-bold text-cyan-300 mb-2">📊 AI Risk Scoring</div>
              <p className="text-sm text-gray-200">Dynamic risk scores built on operational history, compliance records, and behavioral patterns. API-driven automation at scale.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20 hover:border-opacity-40 transition">
              <div className="font-bold text-cyan-300 mb-2">📲 Continuous Risk Monitoring</div>
              <p className="text-sm text-gray-200">Daily tracking of insurance, compliance, and fraud indicators. Real-time alerts when risk levels change.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20 hover:border-opacity-40 transition">
              <div className="font-bold text-cyan-300 mb-2">🔐 Document Intelligence</div>
              <p className="text-sm text-gray-200">Machine learning verifies document authenticity. Catches forgeries, mismatches, and re-use attempts across BOLs, COIs, and contracts.</p>
            </div>
          </div>
          <div className="bg-cyan-600 bg-opacity-20 border-l-4 border-cyan-400 p-4 text-sm text-gray-100 backdrop-blur-sm">
            <strong className="text-cyan-300">Seamless API Integrations:</strong> Works with Truckstop, DAT, and McLeod. Verification happens automatically—no manual workflows, no friction.
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Market Opportunity",
      subtitle: "$1.2T Addressable Market, High Demand for Security",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50 backdrop-blur-sm">
              <div className="text-3xl font-bold">$1.2T</div>
              <p className="text-sm mt-2">U.S. Freight Market</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50 backdrop-blur-sm">
              <div className="text-3xl font-bold">17K+</div>
              <p className="text-sm mt-2">Freight Brokers</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50 backdrop-blur-sm">
              <div className="text-3xl font-bold">700K+</div>
              <p className="text-sm mt-2">Active Carriers</p>
            </div>
          </div>
          <div className="space-y-3 text-gray-200">
            <p><strong>Growing demand</strong> for cargo verification and fraud prevention across all segments</p>
            <p><strong>Regulatory pressure</strong> driving increased carrier vetting requirements</p>
            <p><strong>Insurance incentives</strong> creating ROI for shippers using verified platforms</p>
            <p><strong>Global expansion</strong> as supply chains become more complex and cross-border</p>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Product & Technology",
      subtitle: "Multi-Layer Verification + Real-Time Monitoring",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
              <div className="font-bold text-cyan-300 mb-2">Multi-Factor Identity Verification</div>
              <p className="text-sm text-gray-200">VeriHaul cross-validates business filings, DOT/MC numbers, insurance status, social presence, and ELD signals. AI engine learns from millions of data points to detect anomalies, impersonations, and spoofing attempts—before they cause damage.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
              <div className="font-bold text-cyan-300 mb-2">Document Intelligence</div>
              <p className="text-sm text-gray-200">Machine learning verifies document authenticity and consistency. Automatically detects mismatches, forgeries, and re-use attempts across BOLs, COIs, and contracts.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
              <div className="font-bold text-cyan-300 mb-2">Continuous Risk Monitoring</div>
              <p className="text-sm text-gray-200">Daily tracking of insurance validity, compliance status, and fraud indicators. Alerts by dashboard and email when risk factors change.</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-20">
              <div className="font-bold text-cyan-300 mb-2">AI Risk Scoring</div>
              <p className="text-sm text-gray-200">Dynamic risk scores built on operational history, compliance records, and behavioral patterns. API-driven screening before dispatch.</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-lg border border-white border-opacity-10">
            <div className="font-bold text-white mb-4">Core Technology Stack</div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
              <div>✓ AI/ML behavioral fraud detection</div>
              <div>✓ Real-time data integration layer</div>
              <div>✓ FMCSA, DOT, insurance feeds</div>
              <div>✓ Document intelligence (ML verification)</div>
              <div>✓ TMS platform APIs (DAT, Truckstop, McLeod)</div>
              <div>✓ ELD/GPS pattern analysis & anomaly detection</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600 from-opacity-20 to-cyan-400 to-opacity-20 backdrop-blur-md p-6 rounded-lg border border-cyan-500 border-opacity-30">
            <div className="font-bold text-white mb-3">Integrated Data Sources</div>
            <div className="flex flex-wrap gap-2">
              {['FMCSA', 'DOT', 'Insurance Registries', 'ELD Systems', 'Social Presence', 'Business Filings', 'TMS APIs', 'Geofencing'].map(source => (
                <span key={source} className="bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 border border-cyan-500 border-opacity-30">
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Business Model",
      subtitle: "Recurring Revenue + Network Effects",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50">
              <div className="font-bold text-lg mb-2">SaaS Subscriptions</div>
              <p className="text-lg font-semibold">$99–$999/mo</p>
              <p className="text-sm mt-2 opacity-90">Tiered by monthly load volume</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50">
              <div className="font-bold text-lg mb-2">Per-Load Verification</div>
              <p className="text-lg font-semibold">$3–$10</p>
              <p className="text-sm mt-2 opacity-90">Pay-as-you-verify pricing model</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50">
              <div className="font-bold text-lg mb-2">Enterprise API</div>
              <p className="text-lg font-semibold">Custom Pricing</p>
              <p className="text-sm mt-2 opacity-90">TMS providers & large logistics firms</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6 rounded-lg border border-cyan-500 border-opacity-50">
              <div className="font-bold text-lg mb-2">Insurance Partnerships</div>
              <p className="text-lg font-semibold">Revenue Share</p>
              <p className="text-sm mt-2 opacity-90">Reduced premiums for verified loads</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-lg text-sm text-gray-200 mt-4 border border-white border-opacity-10">
            <strong className="text-cyan-300">Future: Smart Contract Handoff</strong> (Phase 2) — Automated payment release based on verified delivery, eliminating manual reconciliation and reducing fraud risk
          </div>
          <div className="bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-lg text-sm text-gray-200 border border-white border-opacity-10">
            <strong className="text-cyan-300">Unit Economics:</strong> Low CAC (embedded in existing platforms), high LTV (recurring + network effects)
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Roadmap & Traction",
      subtitle: "MVP to Market Leader in 9 Months",
      content: (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold border border-cyan-500">1</div>
              <div>
                <p className="font-bold text-white">Phase 1: Verification Dashboard + FMCSA Integration</p>
                <p className="text-sm text-gray-400">Months 1–3</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold border border-cyan-500">2</div>
              <div>
                <p className="font-bold text-white">Phase 2: AI Fraud Scoring + Real-Time Load Validation</p>
                <p className="text-sm text-gray-400">Months 3–6</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold border border-cyan-500">3</div>
              <div>
                <p className="font-bold text-white">Phase 3: Blockchain Contracts + Network Intelligence</p>
                <p className="text-sm text-gray-400">Months 6–9</p>
              </div>
            </div>
          </div>
          <div className="bg-cyan-600 bg-opacity-20 border-l-4 border-cyan-400 p-4 text-sm text-gray-100 backdrop-blur-sm">
            <strong className="text-cyan-300">Near-term goals:</strong> MVP ready Q3, pilot with 3–5 brokers Q3–Q4, fundraising Q4
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Competition & Differentiation",
      subtitle: "Why VeriHaul Wins",
      content: (
        <div className="space-y-4">
          <div className="bg-white bg-opacity-5 backdrop-blur-md p-4 rounded-lg border border-white border-opacity-10">
            <p className="font-bold text-white mb-2">Competitive Landscape:</p>
            <p className="text-sm text-gray-200">FourKites (tracking), DAT/Truckstop (load boards), Loadsure (insurance) excel at visibility and operations—but have <strong className="text-cyan-300">significant gaps in real-time fraud detection and AI risk scoring</strong></p>
          </div>
          <div className="space-y-3">
            <div className="bg-cyan-600 bg-opacity-20 backdrop-blur-md p-3 rounded border-l-4 border-cyan-400">
              <p className="font-semibold text-cyan-300">✓ AI Behavioral Fraud Scoring</p>
              <p className="text-xs text-gray-300">Predicts risk *before* shipment, not just after—preventive, not reactive</p>
            </div>
            <div className="bg-cyan-600 bg-opacity-20 backdrop-blur-md p-3 rounded border-l-4 border-cyan-400">
              <p className="font-semibold text-cyan-300">✓ Freight Identity Number (FIN)</p>
              <p className="text-xs text-gray-300">Unique digital ID per load—end-to-end traceability and immutable proof of custody</p>
            </div>
            <div className="bg-cyan-600 bg-opacity-20 backdrop-blur-md p-3 rounded border-l-4 border-cyan-400">
              <p className="font-semibold text-cyan-300">✓ Blockchain Smart Contracts</p>
              <p className="text-xs text-gray-300">Payment escrow until verified delivery—eliminates financial risk</p>
            </div>
            <div className="bg-cyan-600 bg-opacity-20 backdrop-blur-md p-3 rounded border-l-4 border-cyan-400">
              <p className="font-semibold text-cyan-300">✓ Community Fraud Alert Network</p>
              <p className="text-xs text-gray-300">Real-time intelligence across brokers & shippers—network effec
