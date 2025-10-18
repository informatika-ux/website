export interface Product {
  id: string;
  name: string;
  category: string;
  purchasePrice: number;
  sellingPrice: number;
  currentStock: number;
  minStock: number;
  unit: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  productId?: string;
  productName?: string;
  serviceId?: string;
  serviceName?: string;
  itemType: 'product' | 'service';
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  date: Date;
  customerName?: string;
  notes?: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  description?: string;
}

export interface Purchase {
  id: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  supplierName?: string;
  date: Date;
  notes?: string;
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: number;
  date: Date;
  receiptNumber?: string;
  notes?: string;
}

export interface SearchFilters {
  query: string;
  category: 'all' | 'products' | 'sales' | 'purchases' | 'expenses';
  dateFrom?: Date;
  dateTo?: Date;
  priceFrom?: number;
  priceTo?: number;
}