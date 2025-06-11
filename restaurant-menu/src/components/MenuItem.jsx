const MenuItem = ({ item }) => {
  return (
    <div className="flex justify-between p-4 bg-gray-50 rounded-md hover:bg-green-50 transition">
      <span className="font-bold text-gray-800">{item.name}</span>
      <span className="font-bold text-pink-600">₹{item.price}</span>
    </div>
  );
};

export default MenuItem;