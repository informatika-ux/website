import { Product, Sale, Purchase, Expense } from '../types';

export const calculations = {
  // Calculate total revenue from sales
  getTotalRevenue: (sales: Sale[]): number => {
    return sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
  },

  // Calculate total expenses
  getTotalExpenses: (expenses: Expense[]): number => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  },

  // Calculate purchase costs
  getTotalPurchaseCosts: (purchases: Purchase[]): number => {
    return purchases.reduce((sum, purchase) => sum + purchase.totalAmount, 0);
  },

  // Calculate profit (revenue - purchase costs - expenses)
  getProfit: (sales: Sale[], purchases: Purchase[], expenses: Expense[]): number => {
    const revenue = calculations.getTotalRevenue(sales);
    const purchaseCosts = calculations.getTotalPurchaseCosts(purchases);
    const totalExpenses = calculations.getTotalExpenses(expenses);
    return revenue - purchaseCosts - totalExpenses;
  },

  // Calculate inventory value
  getInventoryValue: (products: Product[]): number => {
    return products.reduce((sum, product) => sum + (product.currentStock * product.purchasePrice), 0);
  },

  // Get low stock products
  getLowStockProducts: (products: Product[]): Product[] => {
    return products.filter(product => product.currentStock <= product.minStock);
  },

  // Calculate profit margin for a product
  getProductProfitMargin: (product: Product): number => {
    if (product.purchasePrice === 0) return 0;
    return ((product.sellingPrice - product.purchasePrice) / product.purchasePrice) * 100;
  },

  // Filter data based on search criteria
  filterBySearch: (query: string, items: any[]): any[] => {
    if (!query.trim()) return items;
    
    const lowerQuery = query.toLowerCase();
    return items.filter(item => {
      return Object.values(item).some(value => 
        String(value).toLowerCase().includes(lowerQuery)
      );
    });
  }
};