import { createContext, useState, useContext } from 'react';

// Create a context for the markdown content
const MarkdownContext = createContext();

// Create a provider component for the context
export const MarkdownProvider = ({ children }) => {
 const [markdown, setMarkdown] = useState('');

 return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
 );
};

// Custom hook to use the markdown context
export const useMarkdown = () => useContext(MarkdownContext);
