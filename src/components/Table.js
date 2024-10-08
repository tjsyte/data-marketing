import React, { useState, useEffect } from 'react';
import './Table.css'; 

const Table = ({ data, onDataChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', price: '', sales: '' });
  const [isModalOpen, setModalOpen] = useState(false); 

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEditClick = (item) => {
    setEditingItem(item);
    setNewItem(item);
    setModalOpen(true); 
  };

  const handleDeleteClick = (id) => {
    const newData = data.filter(item => item.id !== id);
    onDataChange(newData);
  };
    
  const handleSaveClick = () => {
    if (editingItem) {
      const updatedData = data.map(item => (item.id === editingItem.id ? { ...item, ...newItem } : item));
      onDataChange(updatedData); 
      setEditingItem(null);
    } else {
      const newData = [...data, { id: data.length + 1, ...newItem }];
      onDataChange(newData); 
    }
    setNewItem({ name: '', price: '', sales: '' }); 
    setModalOpen(false); 
  };

  const handleAddClick = () => {
    setNewItem({ name: '', price: '', sales: '' }); 
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div id="table" className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Data Table</h2>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded shadow-sm w-1/2"
        />

        <button onClick={handleAddClick} className="p-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition">
          Add New Product
        </button>
      </div>

      {/* Modal for Add/Edit */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        onSave={handleSaveClick}
        newItem={newItem} 
        setNewItem={setNewItem} 
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-sm font-medium text-center">ID</th>
              <th className="py-2 px-4 text-sm font-medium text-center">Product Name</th>
              <th className="py-2 px-4 text-sm font-medium text-center">Price</th>
              <th className="py-2 px-4 text-sm font-medium text-center">Sales</th>
              <th className="py-2 px-4 text-sm font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2 px-4 text-sm text-center">{item.id}</td>
                <td className="py-2 px-4 text-sm text-center">{item.name}</td>
                <td className="py-2 px-4 text-sm text-center">${item.price}</td>
                <td className="py-2 px-4 text-sm text-center">{item.sales}</td>
                <td className="py-2 px-4 text-sm text-center">
                  <button
                    onClick={() => handleEditClick(item)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="text-red-500 hover:underline ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, onSave, newItem, setNewItem }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Add / Edit Product</h2>
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          value={newItem.name}
          onChange={handleChange}
          className="p-2 border rounded w-full mb-4"
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={newItem.price}
          onChange={handleChange}
          className="p-2 border rounded w-full mb-4"
        />
        <input
          name="sales"
          type="text"
          placeholder="Sales"
          value={newItem.sales}
          onChange={handleChange}
          className="p-2 border rounded w-full mb-4"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="p-2 bg-gray-300 rounded mr-2">Cancel</button>
          <button onClick={onSave} className="p-2 bg-blue-500 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
