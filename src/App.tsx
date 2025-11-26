import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ManageFarmers from './pages/ManageFarmers';
import ManageBuyers from './pages/ManageBuyers';
import ManageCrops from './pages/ManageCrops';
import UploadPrice from './pages/UploadPrice';
import Reports from './pages/Reports';
import AIModel from './pages/AIModel';
import Settings from './pages/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'farmers':
        return <ManageFarmers />;
      case 'buyers':
        return <ManageBuyers />;
      case 'crops':
        return <ManageCrops />;
      case 'upload':
        return <UploadPrice />;
      case 'reports':
        return <Reports />;
      case 'ai':
        return <AIModel />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
