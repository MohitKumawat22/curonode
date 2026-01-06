"use client"
import React, { useState } from 'react';


const PeriodTracker = () => {
  // State to store the user inputs and the result
  const [secondLastDate, setSecondLastDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');

  const handlePredict = () => {

    setError('');
    setPrediction(null);

    if (!secondLastDate || !lastDate) {
      setError('Please select both dates to calculate.');
      return;
    }

    const date1 = new Date(secondLastDate);
    const date2 = new Date(lastDate);

    if (date1 >= date2) {
      setError('The "Previous Period" date must be before the "Most Recent Period" date.');
      return;
    }


    const differenceInTime = date2.getTime() - date1.getTime();

    const cycleLengthDays = differenceInTime / (1000 * 3600 * 24);

    const nextPeriodDate = new Date(date2);
    nextPeriodDate.setDate(date2.getDate() + cycleLengthDays);

    setPrediction(nextPeriodDate.toDateString());
  };

  return (
    <div className="h-screen w-screen bg-pink-50 flex items-center justify-center font-sans flex-col ">
      <h2 className='text-3xl font-bold uppercase text-pink-800 m-10'>Period Tracker</h2>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-pink-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Cycle Tracker</h1>
          <p className="text-gray-500 text-sm">
            Enter the start dates of your last two periods to predict your next one.
          </p>
        </div>
        <div className="space-y-6">

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">
              Previous Period Start Date
            </label>
            <input
              type="date"
              value={secondLastDate}
              onChange={(e) => setSecondLastDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-2">
              Most Recent Period Start Date
            </label>
            <input
              type="date"
              value={lastDate}
              onChange={(e) => setLastDate(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition"
            />
          </div>
          <button
            onClick={handlePredict}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02]"
          >
            Predict Next Period
          </button>
        </div>
        <div className="mt-8 text-center min-h-[4rem]">
          {error && (
            <p className="text-red-500 bg-red-50 p-2 rounded-lg text-sm animate-pulse">
              {error}
            </p>
          )}

          {prediction && !error && (
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <p className="text-gray-600 text-sm mb-1">Your next period is expected on:</p>
              <p className="text-2xl font-bold text-green-700">{prediction}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodTracker;