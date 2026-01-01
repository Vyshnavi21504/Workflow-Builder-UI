

import React from 'react';

const Node = ({ node, onAdd, onDelete, onEdit }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isEnd = node.type === 'end';

  return (
    <div className={`node-tree ${!hasChildren ? 'no-children' : ''}`}>
      <div className="node-card">
        <div className="node-header">
          <span>{node.type.toUpperCase()}</span>
          
          {node.id !== 'root' && (
            <button className="delete-cross-btn" onClick={() => onDelete(node.id)}>
              ×
            </button>
          )}
        </div>

        <input
          className="node-input"
          value={node.label}
          onChange={(e) => onEdit(node.id, e.target.value)}
        />

        {!isEnd && (
          <div className="node-actions">
            <button onClick={() => onAdd(node.id, 'action')}>+ Action</button>
            <button onClick={() => onAdd(node.id, 'branch')}>+ Branch</button>
            <button onClick={() => onAdd(node.id, 'end')}>+ End</button>
          </div>
        )}
      </div>

      {hasChildren && (
        <div className="children-container">
          {node.children.map((child) => (
            <Node 
              key={child.id} 
              node={child} 
              onAdd={onAdd} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Node;