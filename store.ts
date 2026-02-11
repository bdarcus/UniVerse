
import { useState, useEffect } from 'react';
import { portfolioItems as initialItems } from './data';
import { PortfolioItem } from './types';

// Simple session-based store to simulate persistence in the prototype
class PortfolioStore {
  private items: PortfolioItem[] = [...initialItems];
  private listeners: (() => void)[] = [];

  getItems() {
    return this.items;
  }

  getItem(id: string | null) {
    return this.items.find(item => item.id === id) || this.items[0];
  }

  updateItem(id: string, updates: Partial<PortfolioItem>) {
    this.items = this.items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l());
  }
}

export const portfolioStore = new PortfolioStore();

export const usePortfolioItems = () => {
  const [items, setItems] = useState(portfolioStore.getItems());

  useEffect(() => {
    return portfolioStore.subscribe(() => {
      setItems([...portfolioStore.getItems()]);
    });
  }, []);

  return items;
};
