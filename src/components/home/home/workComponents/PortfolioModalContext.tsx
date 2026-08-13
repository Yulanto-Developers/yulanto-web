"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { PortfolioItem } from "./portfolio";

interface PortfolioModalContextType {
  selected: PortfolioItem | null;
  openModal: (item: PortfolioItem) => void;
  closeModal: () => void;
}

const PortfolioModalContext =
  createContext<PortfolioModalContextType | undefined>(
    undefined
  );

export function PortfolioModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selected, setSelected] =
    useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setSelected(item);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <PortfolioModalContext.Provider
      value={{
        selected,
        openModal,
        closeModal,
      }}
    >
      {children}
    </PortfolioModalContext.Provider>
  );
}

export function usePortfolioModal() {
  const context = useContext(PortfolioModalContext);

  if (!context) {
    throw new Error(
      "usePortfolioModal must be used inside PortfolioModalProvider"
    );
  }

  return context;
}