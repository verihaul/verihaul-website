import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Zap, Lock, Network, Check, Mail, Phone } from 'lucide-react';

export default function VeriHaulLanding() {
  const [email, setEmail] = useState('');
  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);

  const faqItems = [
    {
      q: "How does VeriHaul reduce cargo theft?",
      a: "VeriHaul authenticates carriers in real-time before shipment using multi-factor verification, flags high-risk loads based on AI scoring, and creates a verified digital identity for every shipment. This makes it nearly impossible for fake carriers or double brokers to slip through undetected."
    },
    {
      q: "What data sources does VeriHaul use?",
      a: "We integrate FMCSA, DOT, insurance registries, domain registration data, social profiles, ELD/GPS patterns, and TMS platforms. Our AI engine continuously analyzes this data to detect fraud and anomalies."
    },
    {
      q: "Does VeriHaul work with my TMS?",
      a: "Yes. VeriHaul integrates via API with leading TMS platforms including Truckstop, DAT, and McLeod. Verification happens automatically when loads are created."
    },
    {
