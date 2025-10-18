import React, { useState } from 'react';
import { Plus, ShoppingCart, Search, Calendar, Edit, Trash2 } from 'lucide-react';
import { Product, Sale, Service } from '../types';
import { calculations } from '../utils/calculations';

interface SalesProps {
  products: Product[];
  services: Service[];
  sales: Sale[];
  onAddSale: (sale: Omit<Sale, 'id'>) => void;
  onUpdateProductStock: (productId?: string, newStock?: number) => void;
}

const Sales: React.FC<SalesProps> = ({ 
  products, 
  services, 
  sales, 
  onAddSale, 
  onUpdateProductStock 
}) => {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'customer' | 'amount' | 'product'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [formData, setFormData] = useState({
    itemType: 'product' as 'product' | 'service',
    productId: '',
    serviceId: '',
    quantity: '',
    unitPrice: '',
    customerName: '',
    notes: '',
    date: ''
  });

  const filteredAndSortedSales = () => {
    let filtered = sales.filter(sale => {
      const matchesSearch = calculations.filterBySearch(searchQuery, [sale]).length > 0;
      const matchesDate = !dateFilter || sale.date.toISOString().split('T')[0] === dateFilter;
      return matchesSearch && matchesDate;
    });
    
    return filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case 'customer':
          aValue = (a.customerName || '').toLowerCase();
          bValue = (b.customerName || '').toLowerCase();
          break;
        case 'amount':
          aValue = a.totalAmount;
          bValue = b.totalAmount;
          break;
        case 'product':
          aValue = (a.productName || a.serviceName || '').toLowerCase();
          bValue = (b.productName || b.serviceName || '').toLowerCase();
          break;
        default:
          return 0;
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('hu-HU', { 
      style: 'currency', 
      currency: 'HUF',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleItemTypeChange = (type: 'product' | 'service') => {
    setFormData({
      ...formData,
      itemType: type,
      productId: '',
      serviceId: '',
      unitPrice: ''
    });
  };

  const handleItemChange = (itemId: string) => {
    if (formData.itemType === 'product') {
      const product = products.find(p => p.id === itemId);
      setFormData({
        ...formData,
        productId: itemId,
        unitPrice: product ? product.sellingPrice.toString() : ''
      });
    } else {
      const service = services.find(s => s.id === itemId);
      setFormData({
        ...formData,
        serviceId: itemId,
        unitPrice: service ? service.price.toString() : ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const quantity = parseInt(formData.quantity);
    const unitPrice = parseFloat(formData.unitPrice);
    const totalAmount = quantity * unitPrice;

    let sale: Omit<Sale, 'id'>;

    if (formData.itemType === 'product') {
      const product = products.find(p => p.id === formData.productId);
      if (!product) return;

      // Check if there's enough stock
      if (product.currentStock < quantity) {
        alert(`Nincs elegendő készlet! Elérhető: ${product.currentStock} ${product.unit}`);
        return;
      }

      sale = {
        productId: formData.productId,
        productName: product.name,
        itemType: 'product',
        quantity,
        unitPrice,
        totalAmount,
        date: formData.date ? new Date(formData.date) : new Date(),
        customerName: formData.customerName || undefined,
        notes: formData.notes || undefined
      };

      // Update product stock
      onUpdateProductStock(formData.productId, product.currentStock - quantity);
    } else {
      const service = services.find(s => s.id === formData.serviceId);
      if (!service) return;

      sale = {
        serviceId: formData.serviceId,
        serviceName: service.name,
        itemType: 'service',
        quantity,
        unitPrice,
        totalAmount,
        date: formData.date ? new Date(formData.date) : new Date(),
        customerName: formData.customerName || undefined,
        notes: formData.notes || undefined
      };
    }

    onAddSale(sale);

    setFormData({
      itemType: 'product',
      productId: '',
      serviceId: '',
      quantity: '',
      unitPrice: '',
      customerName: '',
      notes: '',
      date: ''
    });
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      itemType: 'product',
      productId: '',
      serviceId: '',
      quantity: '',
      unitPrice: '',
      customerName: '',
      notes: '',
      date: ''
    });
  };

  const totalRevenue = calculations.getTotalRevenue(filteredAndSortedSales());

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Eladások</h1>
          <p className="text-gray-400">Eladások kezelése és nyomon követése</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Új Eladás
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-md p-6">
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Keresés eladásokban..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
            >
              <option value="date">Rendezés dátum szerint</option>
              <option value="customer">Rendezés vásárló szerint</option>
              <option value="amount">Rendezés összeg szerint</option>
              <option value="product">Rendezés termék szerint</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
            >
              <option value="asc">Növekvő</option>
              <option value="desc">Csökkenő</option>
            </select>
            <div className="bg-green-900/20 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-400">Összes bevétel</p>
              <p className="text-lg font-bold text-green-600">{formatCurrency(totalRevenue)}</p>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="mb-6 p-4 border border-gray-600 rounded-lg bg-gray-700">
            <h3 className="text-lg font-semibold mb-4 text-white">Új Eladás Rögzítése</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Típus</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="product"
                        checked={formData.itemType === 'product'}
                        onChange={(e) => handleItemTypeChange(e.target.value as 'product' | 'service')}
                        className="mr-2"
                      />
                      <span className="text-white">Termék</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="service"
                        checked={formData.itemType === 'service'}
                        onChange={(e) => handleItemTypeChange(e.target.value as 'product' | 'service')}
                        className="mr-2"
                      />
                      <span className="text-white">Szolgáltatás</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {formData.itemType === 'product' ? 'Termék' : 'Szolgáltatás'}
                  </label>
                  <select
                    value={formData.itemType === 'product' ? formData.productId : formData.serviceId}
                    onChange={(e) => handleItemChange(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                    required
                  >
                    <option value="">Válassz {formData.itemType === 'product' ? 'terméket' : 'szolgáltatást'}</option>
                    {formData.itemType === 'product' 
                      ? products.map(product => (
                          <option key={product.id} value={product.id}>
                            {product.name} (Készlet: {product.currentStock} {product.unit})
                          </option>
                        ))
                      : services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name} ({formatCurrency(service.price)}/{service.unit})
                          </option>
                        ))
                    }
                  </select>
                </div>

                <input
                  type="number"
                  placeholder="Mennyiség"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                  required
                  min="1"
                />
                
                <input
                  type="number"
                  placeholder="Egységár (HUF)"
                  value={formData.unitPrice}
                  onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                  className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                  required
                />

                <input
                  type="text"
                  placeholder="Vásárló neve (opcionális)"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                />

                <input
                  type="datetime-local"
                  placeholder="Dátum (opcionális - alapértelmezett: most)"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  title="Ha üresen hagyod, az aktuális dátum és idő lesz használva"
                />

                <input
                  type="text"
                  placeholder="Megjegyzés (opcionális)"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="px-3 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                />
              </div>

              {formData.quantity && formData.unitPrice && (
                <div className="mt-4 p-3 bg-green-900/20 rounded-lg">
                  <p className="text-green-400 font-medium">
                    Összesen: {formatCurrency(parseInt(formData.quantity || '0') * parseFloat(formData.unitPrice || '0'))}
                  </p>
                </div>
              )}

              <div className="flex gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Eladás Rögzítése
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Mégse
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Dátum
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Termék/Szolgáltatás
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Mennyiség
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Egységár
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Összesen
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Vásárló
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {filteredAndSortedSales().map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-700">
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {formatDate(sale.date)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <ShoppingCart className="w-5 h-5 text-gray-500 mr-2" />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {sale.productName || sale.serviceName}
                        </div>
                        <div className="text-sm text-gray-400">
                          {sale.itemType === 'product' ? 'Termék' : 'Szolgáltatás'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {sale.quantity}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {formatCurrency(sale.unitPrice)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                    {formatCurrency(sale.totalAmount)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                    {sale.customerName || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSortedSales().length === 0 && (
          <div className="text-center py-8">
            <ShoppingCart className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400">
              {searchQuery || dateFilter ? 'Nincs eladás a keresési feltételeknek megfelelően' : 'Még nincsenek eladások'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sales;