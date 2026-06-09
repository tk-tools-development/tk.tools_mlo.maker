import React, { useState } from 'react';
import '@/styles/Toolbox.css';

interface ToolboxProps {
  onSelectProp: (propId: string) => void;
  selectedProp: string | null;
}

// Sample props categories for FiveM
const PROP_CATEGORIES = {
  buildings: [
    { id: 'building_generic', name: 'Generic Building' },
    { id: 'building_house', name: 'House' },
    { id: 'building_shop', name: 'Shop' },
  ],
  furniture: [
    { id: 'furniture_table', name: 'Table' },
    { id: 'furniture_chair', name: 'Chair' },
    { id: 'furniture_bed', name: 'Bed' },
  ],
  props: [
    { id: 'prop_bottle', name: 'Bottle' },
    { id: 'prop_box', name: 'Box' },
    { id: 'prop_plant', name: 'Plant' },
  ],
  terrain: [
    { id: 'terrain_grass', name: 'Grass' },
    { id: 'terrain_concrete', name: 'Concrete' },
    { id: 'terrain_dirt', name: 'Dirt' },
  ],
};

export const Toolbox: React.FC<ToolboxProps> = ({ onSelectProp, selectedProp }) => {
  const [expandedCategory, setExpandedCategory] = useState<string>('buildings');
  const [searchTerm, setSearchTerm] = useState('');

  const currentItems = PROP_CATEGORIES[expandedCategory as keyof typeof PROP_CATEGORIES] || [];

  const filteredItems = currentItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="toolbox">
      <div className="toolbox-header">
        <h2>Toolbox</h2>
      </div>

      <div className="toolbox-search">
        <input
          type="text"
          placeholder="Search props..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="toolbox-categories">
        {Object.keys(PROP_CATEGORIES).map((category) => (
          <button
            key={category}
            className={`category-button ${expandedCategory === category ? 'active' : ''}`}
            onClick={() => setExpandedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="toolbox-items">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`toolbox-item ${selectedProp === item.id ? 'selected' : ''}`}
            onClick={() => onSelectProp(item.id)}
            draggable
            onDragStart={(e) => {
              e.dataTransfer?.setData('propId', item.id);
            }}
          >
            <div className="item-icon">📦</div>
            <div className="item-name">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="toolbox-actions">
        <button className="btn btn-primary">Export MLO</button>
        <button className="btn btn-secondary">Save Project</button>
      </div>
    </div>
  );
};
