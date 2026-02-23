'use client';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabViewProps {
  tabs: Tab[];
}

export default function TabView({ tabs }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  return (
    <div className="tab-view">
      {/* Tab Headers */}
      <div className="tab-headers">
        <div 
          className="tab-slider" 
          style={{ 
            transform: `translateX(${activeIndex * 100}%)` 
          }}
        />
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}