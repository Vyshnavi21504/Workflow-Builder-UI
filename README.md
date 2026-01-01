# Visual Workflow Builder

This is a professional, interactive workflow builder built with **React**. This project allows users to create, edit, and manage complex decision trees with a high-performance recursive data structure.

##  Live Demo link: https://workflow-builder-ui-woad.vercel.app/


## Demo video:
https://github.com/user-attachments/assets/06f4d152-fbbe-455e-b76b-3c82e41f38b5


---

##  Features

* **Dynamic Tree Construction**: Add 'Action', 'Branch' (Condition), or 'End' nodes recursively.
* **Intelligent Deletion**: Implements "node bridging" logic , when a parent node is deleted, its children are automatically re-attached to the grandparent node to maintain workflow continuity.
* **Undo/Redo System**: A complete state history stack allowing users to revert or re-apply structural changes.
* **Real-time Editing**: Labels can be edited directly within the node cards.
* **Auto-Centering Layout**: A custom CSS flexbox implementation that keeps the tree perfectly centered as it grows in any direction.
* **JSON Export**: Generates a clean, hierarchical JSON structure of the entire workflow for backend integration.

---

## Tech Stack

* **Frontend**: React.js (Functional Components & Hooks)
* **Styling**: Pure CSS3 (Custom properties, Flexbox centering, Dotted grid canvas)
* **Data Structure**: Recursive Tree
* **State Management**: React `useState` with deep-cloning for history tracking.

---

### Getting Started
Clone the repo: git clone https://github.com/Vyshnavi21504/Workflow-Builder-UI.git


Install dependencies:
npm install

Run the development server:
npm run dev
## Developed by Vyshnavi Madhusudhan
 
