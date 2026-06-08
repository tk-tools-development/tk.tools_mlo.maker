import React, { useState } from 'react';
import { Viewport } from '@/components/Viewport';
import { Toolbox } from '@/components/Toolbox';
import '@/styles/App.css';

function App() {
  const [selectedProp, setSelectedProp] = useState<string | null>(null);

  return (
    <div className="editor-container">
      <div className="viewport-container">
        <Viewport />
      </div>
      <Toolbox onSelectProp={setSelectedProp} selectedProp={selectedProp} />
    </div>
  );
}

export default App;
