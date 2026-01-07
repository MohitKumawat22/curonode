"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Activity,
  Heart,
  Settings,
  BookOpen,
  Bell,
  ChevronRight,
  Droplet,
  Smile,
  Frown,
  Meh,
  Sun,
  Moon,
} from "lucide-react";

// --- Mock Data & Constants ---
const SYMPTOMS_LIST = [
  "Cramps",
  "Headache",
  "Acne",
  "Fatigue",
  "Bloating",
  "Insomnia",
];
const MOODS = [
  { label: "Happy", icon: <Smile className="w-6 h-6 text-green-500" /> },
  { label: "Calm", icon: <Sun className="w-6 h-6 text-yellow-500" /> },
  { label: "Irritated", icon: <Frown className="w-6 h-6 text-red-500" /> },
  { label: "Sad", icon: <Moon className="w-6 h-6 text-blue-500" /> },
  { label: "Anxious", icon: <Activity className="w-6 h-6 text-purple-500" /> },
];

const PeriodTracker = () => {
  // --- State Management ---
  const [activeTab, setActiveTab] = useState("dashboard"); // dashboard, track, history, insights, settings

  // FIX: Initialize with today's date (or 5 days ago) so the UI shows active phases instead of "Late"
  // Format: YYYY-MM-DD
  const [lastPeriodDate, setLastPeriodDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 5); // Default to starting 5 days ago to show "Menstrual Phase"
    return d.toISOString().split("T")[0];
  });

  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);

  // Tracking Data State
  const [dailyLog, setDailyLog] = useState({
    flow: "Medium",
    pain: 3, // 1-10
    mood: "Calm",
    symptoms: [],
  });

  // Notifications Mock State
  const [notifications, setNotifications] = useState({
    periodStart: true,
    ovulation: true,
    pills: false,
  });

  // --- Logic & Calculations ---

  // 1. Calculate Next Period
  const getNextPeriodDate = () => {
    const date = new Date(lastPeriodDate);
    date.setDate(date.getDate() + parseInt(cycleLength));
    return date.toDateString();
  };

  // 2. Calculate Ovulation (approx 14 days before next period)
  const getOvulationDate = () => {
    const nextDate = new Date(lastPeriodDate);
    nextDate.setDate(nextDate.getDate() + parseInt(cycleLength));
    nextDate.setDate(nextDate.getDate() - 14);
    return nextDate.toDateString();
  };

  // 3. Determine Current Phase
  const getPhase = () => {
    const start = new Date(lastPeriodDate);
    const today = new Date();

    // Calculate difference in days
    const diffTime = Math.abs(today - start);
    const dayOfCycle = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (dayOfCycle <= periodLength)
      return {
        name: "Menstrual Phase",
        color: "text-pink-600",
        bg: "bg-pink-100",
      };
    if (dayOfCycle <= 13)
      return {
        name: "Follicular Phase",
        color: "text-purple-600",
        bg: "bg-purple-100",
      };
    if (dayOfCycle === 14)
      return {
        name: "Ovulation Day",
        color: "text-green-600",
        bg: "bg-green-100",
      };
    if (dayOfCycle > 14 && dayOfCycle <= cycleLength)
      return {
        name: "Luteal Phase",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };

    // If we passed the cycle length, we are technically "Late" until a new period is logged
    return {
      name: "Late / Irregular",
      color: "text-gray-600",
      bg: "bg-gray-100",
    };
  };

  const currentPhase = getPhase();

  // --- Handlers ---
  const handleSymptomToggle = (symptom) => {
    setDailyLog((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  // --- Render Sections ---

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Main Status Card */}
      <div
        className={`p-8 rounded-3xl shadow-lg ${currentPhase.bg} border border-white/50 relative overflow-hidden transition-all duration-500`}
      >
        <div className="relative z-10">
          <h2
            className={`text-sm font-bold uppercase tracking-wider ${currentPhase.color} opacity-70`}
          >
            Current Cycle Phase
          </h2>
          <h1 className={`text-4xl font-extrabold mt-2 ${currentPhase.color}`}>
            {currentPhase.name}
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Next Period Expected
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {getNextPeriodDate()}
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium">
                Estimated Ovulation
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {getOvulationDate()}
              </p>
            </div>
          </div>
        </div>
        {/* Decorative Circle */}
        <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white opacity-40 rounded-full blur-2xl"></div>
      </div>

      {/* Grid for Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fertility Window Widget */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-700">Fertile Window</h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            High chance of pregnancy this week.
          </p>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-green-400 w-2/3 rounded-full"></div>
          </div>
        </div>

        {/* Daily Insight Widget */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-700">Health Tip</h3>
          </div>
          <p className="text-gray-600 italic">
            {" "}
            During the Luteal phase, your energy might dip. Try light yoga
            instead of heavy cardio today.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTracker = () => (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-50 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Log</h2>

      {/* Flow */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-3">
          Flow Intensity
        </label>
        <div className="flex gap-4">
          {["Light", "Medium", "Heavy"].map((level) => (
            <button
              key={level}
              onClick={() => setDailyLog({ ...dailyLog, flow: level })}
              className={`flex-1 py-3 rounded-xl border-2 transition-all font-medium
                ${
                  dailyLog.flow === level
                    ? "border-pink-500 bg-pink-50 text-pink-700"
                    : "border-gray-100 text-gray-400 hover:border-pink-200"
                }`}
            >
              <Droplet
                className={`w-4 h-4 mx-auto mb-1 ${
                  dailyLog.flow === level ? "fill-current" : ""
                }`}
              />
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Mood */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-3">
          Mood
        </label>
        <div className="flex justify-between">
          {MOODS.map((m) => (
            <button
              key={m.label}
              onClick={() => setDailyLog({ ...dailyLog, mood: m.label })}
              className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                dailyLog.mood === m.label
                  ? "bg-gray-100 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {m.icon}
              <span className="text-xs mt-2 font-medium">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pain Slider */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="block text-sm font-bold text-gray-700">
            Pain Level
          </label>
          <span className="text-pink-600 font-bold">{dailyLog.pain}/10</span>
        </div>
        <input
          type="range"
          min="0"
          max="10"
          value={dailyLog.pain}
          onChange={(e) => setDailyLog({ ...dailyLog, pain: e.target.value })}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
        />
      </div>

      {/* Symptoms */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 mb-3">
          Symptoms
        </label>
        <div className="flex flex-wrap gap-2">
          {SYMPTOMS_LIST.map((symptom) => (
            <button
              key={symptom}
              onClick={() => handleSymptomToggle(symptom)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  dailyLog.symptoms.includes(symptom)
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-pink-700 transition">
        Save Today's Log
      </button>
    </div>
  );

  const renderHistory = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Cycle Analytics
        </h3>
        <div className="h-40 flex items-end gap-2 px-2">
          {/* Mock Bar Chart */}
          {[28, 29, 27, 30, 28, 28].map((val, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center gap-2 group"
            >
              <div
                className="w-full bg-pink-300 rounded-t-lg transition-all group-hover:bg-pink-500 relative"
                style={{ height: `${(val / 35) * 100}%` }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100">
                  {val}
                </span>
              </div>
              <span className="text-xs text-gray-400">Mo {idx + 1}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          Cycle Length History (Days)
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex gap-4 items-start">
        <div className="bg-orange-100 p-2 rounded-lg">
          <Bell className="w-5 h-5 text-orange-600" />
        </div>
        <div>
          <h4 className="font-bold text-orange-800">Irregularity Detected</h4>
          <p className="text-sm text-orange-700 mt-1">
            Your cycle length varied by more than 4 days last month. Keep
            tracking to see if this persists.
          </p>
          <button className="mt-2 text-xs font-bold underline text-orange-800">
            View Doctor Suggestions
          </button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-pink-50 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Settings & Preferences
      </h2>

      {/* Cycle Input */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Average Cycle Length (Days)
          </label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Last Period Start Date
          </label>
          <input
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Notifications</h3>
          <div className="space-y-3">
            {Object.keys(notifications).map((key) => (
              <div key={key} className="flex items-center justify-between">
                <span className="capitalize text-gray-600">
                  {key.replace(/([A-Z])/g, " $1").trim()} Reminder
                </span>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      [key]: !notifications[key],
                    })
                  }
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    notifications[key] ? "bg-pink-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                      notifications[key] ? "translate-x-6" : ""
                    }`}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div className="h-screen w-full bg-pink-50 flex overflow-hidden font-sans text-gray-800">
      {/* Sidebar Navigation */}
      <nav className="w-20 md:w-64 bg-white border-r border-pink-100 flex flex-col justify-between py-6 z-20 shadow-xl">
        <div>
          <div className="px-6 mb-10 flex items-center gap-3">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden md:block text-pink-600">
              FlowTrack
            </span>
          </div>

          <div className="space-y-2 px-3">
            {[
              { id: "dashboard", icon: <Calendar />, label: "Dashboard" },
              { id: "track", icon: <Activity />, label: "Log Symptoms" },
              {
                id: "history",
                icon: <BookOpen />,
                label: "History & Analytics",
              },
              { id: "settings", icon: <Settings />, label: "Settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                  ${
                    activeTab === item.id
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
              >
                {item.icon}
                <span className="font-medium hidden md:block">
                  {item.label}
                </span>
                {activeTab === item.id && (
                  <ChevronRight className="w-4 h-4 ml-auto hidden md:block" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 hidden md:block">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 text-white">
            <p className="text-xs opacity-90 mb-2">Pro Tip</p>
            <p className="text-sm font-medium">
              Tracking mood helps predict PMS symptoms better.
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 px-8 py-5 flex justify-between items-center border-b border-pink-100">
          <h1 className="text-2xl font-bold capitalize text-gray-800">
            {activeTab.replace("-", " ")}
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-white rounded-full border border-gray-100 text-gray-500 hover:bg-gray-50 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 bg-pink-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
              {/* <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" /> */}
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="p-4 md:p-8 max-w-5xl mx-auto pb-20">
          {activeTab === "dashboard" && renderDashboard()}
          {activeTab === "track" && renderTracker()}
          {activeTab === "history" && renderHistory()}
          {activeTab === "settings" && renderSettings()}
        </div>
      </main>
    </div>
  );
};

export default PeriodTracker;
