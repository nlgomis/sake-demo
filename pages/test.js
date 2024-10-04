import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Question from '../components/Question';
import ProgressBar from '../components/ProgressBar';
import questions from '../data/questions';
import calculateResult from '../utils/calculateResult';

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult(newAnswers);
      router.push(`/result?type=${result}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <Head>
        <title>Sake Discovery Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-8 text-gray-800 dark:text-gray-200">
          Discover Your Sake
        </h1>
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      </main>
    </div>
  );
}