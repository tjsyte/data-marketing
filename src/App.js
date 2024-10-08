import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Charts from './components/Charts';
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReviewCard from './components/ReviewCard';
import 'animate.css';

const reviews = [
  {
    product: 'Product 1',
    content: 'Great product! Highly recommend.',
    rating: 5,
    image: 'https://via.placeholder.com/150?text=Product+1',
  },
  {
    product: 'Product 2',
    content: 'Good value for the price.',
    rating: 4,
    image: 'https://via.placeholder.com/150?text=Product+2',
  },
  {
    product: 'Product 3',
    content: 'Average quality, could be better.',
    rating: 3,
    image: 'https://via.placeholder.com/150?text=Product+3',
  },
  {
    product: 'Product 4',
    content: 'Absolutely loved it!',
    rating: 5,
    image: 'https://via.placeholder.com/150?text=Product+4',
  },
  {
    product: 'Product 5',
    content: 'Not worth the money. Very disappointed.',
    rating: 2,
    image: 'https://via.placeholder.com/150?text=Product+5',
  },
  {
    product: 'Product 6',
    content: 'Satisfactory performance.',
    rating: 4,
    image: 'https://via.placeholder.com/150?text=Product+6',
  },
  {
    product: 'Product 7',
    content: 'Terrible experience, I will not buy this again.',
    rating: 1,
    image: 'https://via.placeholder.com/150?text=Product+7',
  },
  {
    product: 'Product 8',
    content: 'Does the job well. Would recommend.',
    rating: 4,
    image: 'https://via.placeholder.com/150?text=Product+8',
  },
];

const WelcomeMessage = () => {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold animate__animated animate__fadeInUp">
        Welcome to the Marketing Dashboard!
      </h1>
      <p className="mt-4 text-lg animate__animated animate__fadeInUp animate__delay-1s">
        Manage your data and visualize performance easily.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

const MainContent = ({ data, onDataChange }) => {
  const location = useLocation();

  return (
    <div className="flex-grow">
      <Header />
      {location.pathname === '/' && <WelcomeMessage />}
      <div className="p-4">
        <Routes>
          <Route path="/table" element={<Table data={data} onDataChange={onDataChange} />} />
          <Route path="/charts" element={<Charts data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      const initialData = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: (Math.random() * 100).toFixed(2),
        sales: Math.floor(Math.random() * 500),
      }));
      setData(initialData);
      localStorage.setItem('data', JSON.stringify(initialData));
    }
  }, []);

  const handleDataChange = (newData) => {
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData)); 
  };

  return (
    <Router>
      <div className="flex h-screen flex-col">
        <MainContent data={data} onDataChange={handleDataChange} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
