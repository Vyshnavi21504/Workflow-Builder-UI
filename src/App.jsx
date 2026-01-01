import React, { useState } from 'react';
import Node from './components/Node';
import { initialWorkflow, generateId } from './utils/treeHelpers';
import './App.css';

function App() {
  const [data, setData] = useState(initialWorkflow);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const saveHistory = () => {
    setHistory((prev) => [...prev, JSON.parse(JSON.stringify(data))]);
    setRedoStack([]); 
  };

  const undo = () => {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setRedoStack((prev) => [JSON.parse(JSON.stringify(data)), ...prev]);
    setData(previous);
    setHistory(history.slice(0, -1));
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const next = redoStack[0];
    setHistory((prev) => [...prev, JSON.parse(JSON.stringify(data))]);
    setData(next);
    setRedoStack(redoStack.slice(1));
  };

  const addNode = (parentId, type) => {
    saveHistory();
    const newNode = {
      id: generateId(),
      type: type,
      label: type === 'branch' ? 'Condition' : `New ${type}`,
      children: type === 'branch' ? [
        { id: generateId(), type: 'action', label: 'True Path', children: [] },
        { id: generateId(), type: 'action', label: 'False Path', children: [] }
      ] : [],
    };

    const updateTree = (current) => {
      if (current.id === parentId) {
        return { ...current, children: [...current.children, newNode] };
      }
      return { 
        ...current, 
        children: current.children ? current.children.map(updateTree) : [] 
      };
    };
    setData(updateTree(data));
  };

  const deleteNode = (id) => {
    if (id === 'root') return;
    saveHistory();
    const updateTree = (current) => {
      if (current.children?.some(child => child.id === id)) {
        const deleted = current.children.find(child => child.id === id);
        const others = current.children.filter(child => child.id !== id);
        return { ...current, children: [...others, ...deleted.children] };
      }
      return { 
        ...current, 
        children: current.children ? current.children.map(updateTree) : [] 
      };
    };
    setData(updateTree(data));
  };

  const editNode = (id, newLabel) => {
    const updateTree = (current) => {
      if (current.id === id) return { ...current, label: newLabel };
      return { 
        ...current, 
        children: current.children ? current.children.map(updateTree) : [] 
      };
    };
    setData(updateTree(data));
  };

  const saveWorkflow = () => {
    console.log("Exported JSON:", JSON.stringify(data, null, 2));
    alert("Check the console for your JSON data!");
  };

  return (
    <div className="canvas">
      <div className="toolbar">
        <button onClick={undo} disabled={history.length === 0}>⤺ Undo</button>
        <button onClick={redo} disabled={redoStack.length === 0}>Redo ⤻</button>
        <button className="save-btn" onClick={saveWorkflow}>Save JSON</button>
      </div>

      <Node 
        node={data} 
        onAdd={addNode} 
        onEdit={editNode} 
        onDelete={deleteNode} 
      />

      <div className="dev-credit">
        Developed by <span>Vyshnavi Madhusudhan</span>
      </div>
    </div>
  );
}

export default App;