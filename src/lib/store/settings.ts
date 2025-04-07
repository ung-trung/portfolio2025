"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storeName } from "@/lib/configs";

type Motion = "system" | "no-preference" | "reduce";

type SettingsStore = {
  motion: Motion;
  minimalMode: boolean;
  setMotion: (motion: Motion) => void;
  toggleMinimalMode: () => void;
};

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      motion: "system",
      minimalMode: false,
      setMotion: (motion) => set({ motion }),
      toggleMinimalMode: () =>
        set((state) => ({ minimalMode: !state.minimalMode })),
    }),
    {
      name: storeName,
    },
  ),
);
