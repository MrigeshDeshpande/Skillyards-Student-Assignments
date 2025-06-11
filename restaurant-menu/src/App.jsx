import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuItems = [
    { id: 1, name: 'Samosa', price: 40, category: 'appetizers' },
    { id: 2, name: 'Paneer Tikka', price: 150, category: 'appetizers' },
    { id: 3, name: 'Dahi Puri', price: 120, category: 'appetizers' },
    { id: 4, name: 'Butter Chicken', price: 300, category: 'main' },
    { id: 5, name: 'Paneer Butter Masala', price: 280, category: 'main' },
    { id: 6, name: 'Biryani', price: 250, category: 'main' },
    { id: 7, name: 'Dal Tadka', price: 180, category: 'main' },
    { id: 8, name: 'Gulab Jamun', price: 100, category: 'desserts' },
    { id: 9, name: 'Rasgulla', price: 90, category: 'desserts' },
    { id: 10, name: 'Jalebi', price: 80, category: 'desserts' },
  ];

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryDisplayNames = {
    all: 'All Items',
    appetizers: 'Appetizers',
    main: 'Main Course',
    desserts: 'Desserts'
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-md p-3 w-[600px] text-center relative">
        <h1 className="text-2xl font-bold text-gray-800 mb-5">All-in-one Menu-Card</h1>

        <div className="flex gap-2 mb-5">
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-green-500 transition"
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex gap-2 mb-6 flex-wrap justify-center">
          {Object.keys(categoryDisplayNames).map(category => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-base transition ${
                selectedCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {categoryDisplayNames[category]}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-5">
            {categoryDisplayNames[selectedCategory]}
          </h2>

          {filteredItems.length === 0 ? (
            <p className="text-gray-500 italic py-6">No items found. Try a different search.</p>
          ) : (
            <div className="space-y-3">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="flex justify-between p-4 bg-gray-50 rounded-md hover:bg-green-50 transition"
                >
                  <span className="font-bold text-gray-800">{item.name}</span>
                  <span className="font-bold text-pink-600">₹{item.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;