"use client";

import { useState, useCallback } from "react";

const STORAGE_KEY = "wrompt_history";
const MAX_ENTRIES = 20;

export function usePromptHistory() {
  const [history, setHistory] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addToHistory = useCallback(({ input, result, targetAI, taskLabel }) => {
    const entry = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      input,
      result,
      targetAI: targetAI || "",
      taskLabel: taskLabel || "",
    };
    setHistory((prev) => {
      const updated = [entry, ...prev].slice(0, MAX_ENTRIES);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const removeFromHistory = useCallback((id) => {
    setHistory((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }, []);

  return { history, addToHistory, removeFromHistory, clearHistory };
}
