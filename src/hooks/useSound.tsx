"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SoundContextValue = {
  muted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);
const STORAGE_KEY = "portfolio-sound-muted";

function createTone(
  context: AudioContext,
  options: {
    startFrequency: number;
    endFrequency: number;
    durationMs?: number;
    volume?: number;
  },
) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  const now = context.currentTime;
  const duration = (options.durationMs ?? 140) / 1000;
  const volume = options.volume ?? 0.12;

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(options.startFrequency, now);
  oscillator.frequency.linearRampToValueAtTime(options.endFrequency, now + duration);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);

  oscillator.start(now);
  oscillator.stop(now + duration);
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const interactedRef = useRef(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setMuted(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, String(muted));
  }, [muted]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const activate = async () => {
      interactedRef.current = true;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }
      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }
    };

    const handleFirstGesture = () => {
      activate();
    };

    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
    };
  }, []);

  const playTone = useCallback(
    (startFrequency: number, endFrequency: number, durationMs?: number, volume?: number) => {
      if (muted || !interactedRef.current) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      createTone(audioContextRef.current, { startFrequency, endFrequency, durationMs, volume });
    },
    [muted],
  );

  const value = useMemo<SoundContextValue>(
    () => ({
      muted,
      toggleMute: () => setMuted((prev) => !prev),
      playHover: () => playTone(880, 1320, 120, 0.1),
      playClick: () => playTone(540, 320, 180, 0.14),
    }),
    [muted, playTone],
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
