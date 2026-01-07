'use client';

import React, { useState, useEffect, useRef } from 'react';

// Question data with specific IDs to track answers
const QUESTIONS = [
  {
    id: "q1",
    text: "Do your periods usually come around the same time each month?",
    options: ["Yes", "No", "Sometimes"]
  },
  {
    id: "q2",
    text: "How many days are there between two periods? (approx)",
    options: ["Less than 21 days", "21-35 days", "More than 35 days", "I don't know"]
  },
  {
    id: "q3",
    text: "How painful are your periods?",
    options: ["Mild", "Moderate", "Severe"]
  },
  {
    id: "q4",
    text: "Does pain happen outside periods?",
    options: ["Yes", "No", "Sometimes"]
  },
  {
    id: "q5",
    text: "Has the pain increased over time?",
    options: ["Yes", "No", "Not sure"]
  },
  {
    id: "q6",
    text: "How heavy is your bleeding?",
    options: ["Light", "Normal", "Heavy"]
  },
  {
    id: "q7",
    text: "Do symptoms affect your daily life?",
    options: ["Not at all", "Somewhat", "Significantly"]
  },
  {
    id: "q8",
    text: "Have you ignored symptoms thinking they are normal?",
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
  const [assessmentResult, setAssessmentResult] = useState(null);
  const chatEndRef = useRef(null);

  // --- 1. Analysis Logic ---
  const calculateResult = (finalAnswers) => {
    let score = 0;
    let flags = [];

    // RED FLAGS (High concern) - Immediately suggest doctor
    if (finalAnswers['q3'] === 'Severe') flags.push("Severe Pain");
    if (finalAnswers['q7'] === 'Significantly') flags.push("Life Impact");
    if (finalAnswers['q4'] === 'Yes') flags.push("Pain Outside Period");

    // YELLOW FLAGS (Moderate concern)
    if (finalAnswers['q1'] === 'No') flags.push("Irregular Cycle");
    if (finalAnswers['q6'] === 'Heavy') flags.push("Heavy Bleeding");
    if (finalAnswers['q2'] === 'Less than 21 days' || finalAnswers['q2'] === 'More than 35 days') flags.push("Atypical Cycle Length");

    // Determine Status
    if (flags.includes("Severe Pain") || flags.includes("Life Impact") || flags.includes("Pain Outside Period")) {
      return {
        status: "Consult a Doctor",
        description: "Your symptoms (severe pain or daily impact) differ from a standard cycle. We recommend seeing a specialist to rule out conditions like Endometriosis or PCOS.",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        icon: "⚠️"
      };
    } else if (flags.length > 0) {
      return {
        status: "Monitor Closely",
        description: `We noticed some variations: ${flags.join(", ")}. It is a good idea to track these symptoms for 2-3 months and show them to a doctor if they persist.`,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        icon: "📝"
      };
    } else {
      return {
        status: "Everything Looks Normal",
        description: "Based on your answers, your cycle patterns appear healthy. Keep maintaining a healthy lifestyle and track your dates!",
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        icon: "✅"
      };
    }
  };

  // --- 2. Helper Functions ---
  const finishAssessment = () => {
    const result = calculateResult(answers);
    setAssessmentResult(result);
    setIsFinished(true);
    setMessages(prev => [
      ...prev, 
      { type: 'bot', text: 'Thank you. I have analyzed your answers. Please check the result card below.' }
    ]);
  };

  const handleAnswer = (answer) => {
    setMessages(prev => [...prev, { type: 'user', text: answer }]);
    
    // Update answers state
    const currentQId = QUESTIONS[currentQuestionIndex].id;
    const updatedAnswers = { ...answers, [currentQId]: answer };
    setAnswers(updatedAnswers);

    // Advance question or finish
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // If it's the last question, we must use the UPDATED answers for calculation
      // We trigger the finish logic in the useEffect to ensure state is clean, 
      // or we can just set index to length to trigger the effect.
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // --- 3. Effects ---
  useEffect(() => {
    // If not finished and we have valid questions left
    if (!isFinished && currentQuestionIndex < QUESTIONS.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: QUESTIONS[currentQuestionIndex].text }
        ]);
      }, 500);
      return () => clearTimeout(timer);
    } 
    // If we went past the last question, finish up
    else if (currentQuestionIndex >= QUESTIONS.length && !isFinished) {
      finishAssessment();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionIndex, isFinished]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isFinished]);

  const progressPercentage = Math.min(((currentQuestionIndex) / QUESTIONS.length) * 100, 100);

  return (
    <div className="h-screen w-screen bg-[#f6f8fb] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[720px] bg-white rounded-xl shadow-[0_6px_18px_rgba(18,38,63,0.06)] flex flex-col h-[80vh] overflow-hidden border border-slate-100">
        
        {/* Chat Area */}
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

        {/* Input/Controls Area */}
        {!isFinished && (
          <div className="p-5 border-t border-slate-100 bg-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {QUESTIONS[currentQuestionIndex]?.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="bg-white border border-[#e6eefc] px-4 py-2.5 rounded-[10px] cursor-pointer hover:shadow-[0_4px_12px_rgba(16,40,80,0.06)] hover:border-[#7aa2ff] transition-all text-slate-700 text-sm active:scale-95"
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

        {/* Final Result Card */}
        {isFinished && assessmentResult && (
          <div className="p-5 border-t border-slate-100 bg-[#fffef6]">
            <div className={`text-center p-6 border rounded-xl bg-white shadow-sm ${assessmentResult.borderColor}`}>
              <div className="text-4xl mb-3">{assessmentResult.icon}</div>
              
              <h3 className={`font-bold text-lg mb-2 ${assessmentResult.color}`}>
                {assessmentResult.status}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {assessmentResult.description}
              </p>
              
              <button 
                onClick={() => window.location.reload()}
                className="bg-[#7aa2ff] text-white px-8 py-2.5 rounded-lg hover:opacity-90 transition font-medium text-sm shadow-md shadow-blue-100"
              >
                Start New Assessment
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}