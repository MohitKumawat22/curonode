'use client';

import React, { useState, useEffect, useRef } from 'react';

const QUESTIONS = [
  {
    id: "q1",
    text: "Do your periods usually come around the same time each month?",
    pattern: "hormonal",
    type: "choice",
    options: ["Yes", "No", "Sometimes"]
  },
  {
    id: "q2",
    text: "How many days are there between two periods? (approx)",
    pattern: "hormonal",
    type: "choice",
    options: ["Less than 21 days", "21-35 days", "More than 35 days", "I don't know"]
  },
  {
    id: "q3",
    text: "How painful are your periods?",
    pattern: "pain",
    type: "choice",
    options: ["Mild", "Moderate", "Severe"]
  },
  {
    id: "q4",
    text: "Does pain happen outside periods?",
    pattern: "pain",
    type: "choice",
    options: ["Yes", "No", "Sometimes"]
  },
  {
    id: "q5",
    text: "Has the pain increased over time?",
    pattern: "pain",
    type: "choice",
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "q6",
    text: "How heavy is your bleeding?",
    pattern: "bleeding",
    type: "choice",
    options: ["Light", "Normal", "Heavy"]
  },
  {
    id: "q7",
    text: "Do symptoms affect your daily life?",
    pattern: "impact",
    type: "choice",
    options: ["Not at all", "Somewhat", "Significantly"]
  },
  {
    id: "q8",
    text: "Have you ignored symptoms thinking they are normal?",
    pattern: "normalization",
    type: "choice",
    options: ["Yes", "No", "Sometimes"]
  }
];

export default function MenstrualHealthAssistant() {
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hi! This assistant helps you understand your menstrual health patterns safely. You can skip any question.' 
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const chatEndRef = useRef(null);

  // --- 1. Define Helper Functions BEFORE useEffect ---
  
  const finishAssessment = () => {
    setIsFinished(true);
    setMessages(prev => [
      ...prev, 
      { type: 'bot', text: 'Thank you for answering. Based on your responses, here is a summary of your patterns.' }
    ]);
  };

  const handleAnswer = (answer) => {
    setMessages(prev => [...prev, { type: 'user', text: answer }]);
    
    setAnswers(prev => ({
      ...prev,
      [QUESTIONS[currentQuestionIndex].id]: answer
    }));

    setCurrentQuestionIndex(prev => prev + 1);
  };

  // --- 2. Effects ---

  useEffect(() => {
    if (!isFinished && currentQuestionIndex < QUESTIONS.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: QUESTIONS[currentQuestionIndex].text }
        ]);
      }, 500);
      return () => clearTimeout(timer);
    } else if (currentQuestionIndex >= QUESTIONS.length && !isFinished) {
      finishAssessment();
    }
    // Note: We exclude finishAssessment from deps to avoid infinite loops, 
    // or you can wrap finishAssessment in useCallback
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, isFinished]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const progressPercentage = Math.min(((currentQuestionIndex) / QUESTIONS.length) * 100, 100);

  return (
    <div id='quickji' className="h-screen w-screen bg-pink-50 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[720px] bg-white rounded-xl shadow-[0_6px_18px_rgba(18,38,63,0.06)] flex flex-col h-[80vh] overflow-hidden border border-slate-100">
        
        <div className="flex-1 overflow-y-auto p-5 space-y-3 scrollbar-thin scrollbar-thumb-slate-200">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 px-4 rounded-[14px] max-w-[80%] leading-[1.4] ${
                msg.type === 'bot'
                  ? 'bg-[#eef6ff] text-[#07264b] self-start rounded-tl-sm'
                  : 'bg-[#f0f6ea] text-[#0b3b1f] self-end ml-auto rounded-tr-sm'
              }`}
            >
              <span className={idx === 0 ? "font-semibold" : ""}>{msg.text}</span>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {!isFinished && (
          <div className="p-5 border-t border-slate-100 bg-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {QUESTIONS[currentQuestionIndex]?.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="bg-white border border-[#e6eefc] px-4 py-2.5 rounded-[10px] cursor-pointer hover:shadow-[0_4px_12px_rgba(16,40,80,0.06)] transition-all text-slate-700 text-sm active:scale-95"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button 
                onClick={() => handleAnswer("Skipped")}
                className="bg-transparent text-[#7b8a9a] border border-[#e3e8ef] px-3 py-2 rounded-lg text-sm hover:bg-slate-50 transition"
              >
                Skip
              </button>
              
              <div className="flex-1 ml-4 h-2 bg-[#eaeef7] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#7aa2ff] transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {isFinished && (
          <div className="p-5 border-t border-slate-100 bg-[#fffef6]">
            <div className="text-center p-4 border border-[#fbf3d6] rounded-xl bg-white">
              <h3 className="font-semibold text-[#db9a00] mb-2">Assessment Complete</h3>
              <p className="text-[#7b8a9a] text-sm">Your answers have been recorded safely.</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 bg-[#7aa2ff] text-white px-6 py-2 rounded-lg hover:opacity-90"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}