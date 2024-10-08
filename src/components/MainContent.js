const MainContent = () => {
  const location = useLocation();

  return (
    <div className="flex-grow">
      <Header />

      {location.pathname === '/' && <WelcomeMessage />}

      <div className="p-4">
        {location.pathname === '/table' && <Table />}
        {location.pathname === '/charts' && <Charts />}
      </div>
    </div>
  );
};
