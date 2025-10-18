import { Product, Sale, Purchase, Expense, Service } from '../types';

const STORAGE_KEYS = {
  PRODUCTS: 'inventory_products',
  SERVICES: 'inventory_services',
  SALES: 'inventory_sales',
  PURCHASES: 'inventory_purchases',
  EXPENSES: 'inventory_expenses',
};

export const storage = {
  // Products
  getProducts: (): Product[] => {
    const data = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return data ? JSON.parse(data).map((p: any) => ({
      ...p,
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt)
    })) : [];
  },

  saveProducts: (products: Product[]): void => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  },

  // Services
  getServices: (): Service[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return data ? JSON.parse(data) : [];
  },

  saveServices: (services: Service[]): void => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  },

  // Sales
  getSales: (): Sale[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SALES);
    return data ? JSON.parse(data).map((s: any) => ({
      ...s,
      date: new Date(s.date)
    })) : [];
  },

  saveSales: (sales: Sale[]): void => {
    localStorage.setItem(STORAGE_KEYS.SALES, JSON.stringify(sales));
  },

  // Purchases
  getPurchases: (): Purchase[] => {
    const data = localStorage.getItem(STORAGE_KEYS.PURCHASES);
    return data ? JSON.parse(data).map((p: any) => ({
      ...p,
      date: new Date(p.date)
    })) : [];
  },

  savePurchases: (purchases: Purchase[]): void => {
    localStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(purchases));
  },

  // Expenses
  getExpenses: (): Expense[] => {
    const data = localStorage.getItem(STORAGE_KEYS.EXPENSES);
    return data ? JSON.parse(data).map((e: any) => ({
      ...e,
      date: new Date(e.date)
    })) : [];
  },

  saveExpenses: (expenses: Expense[]): void => {
    localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(expenses));
  },

  // Clear all data
  clearAll: (): void => {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};