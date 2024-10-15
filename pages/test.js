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
    <div className="min-h-screen bg-background text-primary py-12">
      <Head>
        <title>日本酒発見クイズ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-8 text-primary">
          あなたの日本酒を見つけよう
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