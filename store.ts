
import { useState, useEffect } from 'react';
import { portfolioItems as initialItems } from './data';
import { PortfolioItem, UserRole, ViewContext } from './types';

// Simple session-based store to simulate persistence in the prototype
class PortfolioStore {
  private items: PortfolioItem[] = [...initialItems];
  private currentRole: UserRole = UserRole.STUDENT;
  private currentContext: ViewContext = ViewContext.PRIVATE;
  private listeners: (() => void)[] = [];

  getItems() {
    return this.items;
  }

  getItem(id: string | null) {
    return this.items.find(item => item.id === id) || this.items[0];
  }

  getRole() {
    return this.currentRole;
  }

  setRole(role: UserRole) {
    this.currentRole = role;
    this.notify();
  }

  getContext() {
    return this.currentContext;
  }

  setContext(context: ViewContext) {
    this.currentContext = context;
    this.notify();
  }

  updateItem(id: string, updates: Partial<PortfolioItem>) {
    this.items = this.items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    this.notify();
  }

  toggleItemPublic(id: string) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        const newStatus = item.status === 'PUBLIC' ? 'ASSESSED' : 'PUBLIC';
        return { ...item, status: newStatus };
      }
      return item;
    });
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

export const useAppContext = () => {
  const [state, setState] = useState({
    role: portfolioStore.getRole(),
    context: portfolioStore.getContext()
  });

  useEffect(() => {
    return portfolioStore.subscribe(() => {
      setState({
        role: portfolioStore.getRole(),
        context: portfolioStore.getContext()
      });
    });
  }, []);

  return {
    ...state,
    setRole: (role: UserRole) => portfolioStore.setRole(role),
    setContext: (context: ViewContext) => portfolioStore.setContext(context)
  };
};
