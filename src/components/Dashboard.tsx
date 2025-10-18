import React from 'react';
import { TrendingUp, TrendingDown, Package, ShoppingCart, AlertTriangle, DollarSign } from 'lucide-react';
import { Product, Sale, Purchase, Expense } from '../types';
import { calculations } from '../utils/calculations';

interface DashboardProps {
  products: Product[];
  sales: Sale[];
  purchases: Purchase[];
  expenses: Expense[];
}

const Dashboard: React.FC<DashboardProps> = ({ products, sales, purchases, expenses }) => {
  const totalRevenue = calculations.getTotalRevenue(sales);
  const totalExpenses = calculations.getTotalExpenses(expenses);
  const totalPurchaseCosts = calculations.getTotalPurchaseCosts(purchases);
  const profit = calculations.getProfit(sales, purchases, expenses);
  const inventoryValue = calculations.getInventoryValue(products);
  const lowStockProducts = calculations.getLowStockProducts(products);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', { 
      style: 'currency', 
      currency: 'HUF',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">{title}</p>
          <p className="text-2xl font-bold" style={{ color }}>{value}</p>
        </div>
        <Icon className="w-8 h-8 text-gray-500" />
      </div>
      {trend && (
        <div className="mt-2 flex items-center text-sm">
          {trend > 0 ? (
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          )}
          <span className={trend > 0 ? 'text-green-600' : 'text-red-600'}>
            {Math.abs(trend)}%
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Irányítópult</h1>
        <p className="text-gray-400">Áttekintés a készlet és pénzügyek állapotáról</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Összes Bevétel"
          value={formatCurrency(totalRevenue)}
          icon={TrendingUp}
          color="#10b981"
        />
        <StatCard
          title="Profit"
          value={formatCurrency(profit)}
          icon={DollarSign}
          color={profit >= 0 ? "#10b981" : "#ef4444"}
        />
        <StatCard
          title="Készlet Érték"
          value={formatCurrency(inventoryValue)}
          icon={Package}
          color="#3b82f6"
        />
        <StatCard
          title="Összes Kiadás"
          value={formatCurrency(totalExpenses + totalPurchaseCosts)}
          icon={TrendingDown}
          color="#ef4444"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
            Alacsony Készlet
          </h3>
          {lowStockProducts.length === 0 ? (
            <p className="text-gray-400">Nincs alacsony készletű termék</p>
          ) : (
            <div className="space-y-2">
              {lowStockProducts.slice(0, 5).map(product => (
                <div key={product.id} className="flex justify-between items-center p-2 bg-orange-900/20 rounded">
                  <span className="font-medium text-white">{product.name}</span>
                  <span className="text-sm text-orange-600">
                    {product.currentStock} {product.unit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
            <ShoppingCart className="w-5 h-5 mr-2 text-blue-500" />
            Legutóbbi Eladások
          </h3>
          {sales.length === 0 ? (
            <p className="text-gray-400">Nincs eladás</p>
          ) : (
            <div className="space-y-2">
              {sales.slice(-5).reverse().map(sale => (
                <div key={sale.id} className="flex justify-between items-center p-2 bg-blue-900/20 rounded">
                  <span className="font-medium text-white">{sale.productName}</span>
                  <span className="text-sm text-blue-600">
                    {formatCurrency(sale.totalAmount)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Pénzügyi Összesítő</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-900/20 rounded-lg">
            <p className="text-sm text-gray-400">Bevétel</p>
            <p className="text-xl font-bold text-green-600">{formatCurrency(totalRevenue)}</p>
          </div>
          <div className="text-center p-4 bg-red-900/20 rounded-lg">
            <p className="text-sm text-gray-400">Kiadások</p>
            <p className="text-xl font-bold text-red-600">{formatCurrency(totalExpenses + totalPurchaseCosts)}</p>
          </div>
          <div className="text-center p-4 bg-blue-900/20 rounded-lg">
            <p className="text-sm text-gray-400">Nettó Profit</p>
            <p className={`text-xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(profit)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;