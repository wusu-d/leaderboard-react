"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Participant } from "./_components/types/leaderboard";
import Confetti from "./_components/Confetti";

const initialData: Participant[] = [
  { id: "1", name: "Alice", score: 0 },
  { id: "2", name: "Bob", score: 0 },
  { id: "3", name: "Charlie", score: 0 },
  { id: "4", name: "James", score: 0 },
  { id: "5", name: "Tina", score: 0 },
  { id: "6", name: "Martha", score: 0 },
];
export default function Home() {
  const [participants, setParticipants] = useState<Participant[]>(initialData);

  const updateScores = useCallback(() => {
    setParticipants((currentParticipants) =>
      currentParticipants
        .map((participant) => {
          const newScore = Math.max(
            0,
            participant.score + Math.floor(Math.random() * 21) - 10
          );
          return {
            ...participant,
            score: newScore,
            hasChanged: newScore !== participant.score,
          };
        })
        .sort((a, b) => b.score - a.score)
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateScores, 2000);
    return () => clearInterval(intervalId);
  }, [updateScores]);

  useEffect(() => {
    if (participants.some((p) => p.hasChanged)) {
      const timeoutId = setTimeout(() => {
        setParticipants((currentParticipants) =>
          currentParticipants.map((p) => ({ ...p, hasChanged: false }))
        );
      }, 500); // Duration of the highlight effect

      return () => clearTimeout(timeoutId);
    }
  }, [participants]);

  return (
    <div className="h-screen overflow-y-scroll py-4 font-geist ">
      <Confetti />
      <Card className="w-full max-w-md mx-auto h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-wide font-geistMono text-center">
            Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="leaderboard-list">
            {participants.map((participant, index) => (
              <li
                key={participant.id}
                className="leaderboard-item border border-orange-400 bg-white ring-2 ring-offset-4 ring-orange-800 flex justify-between items-center p-2 bg-secondary rounded-md"
                style={{
                  transform: `translateY(${index * 100}%)`,
                }}
              >
                <span className="font-semibold">
                  {index + 1}. {participant.name}
                </span>
                <span
                  className={`score text-primary ${
                    participant.hasChanged ? "score-changed" : ""
                  }`}
                >
                  {participant.score}
                </span>
              </li>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
