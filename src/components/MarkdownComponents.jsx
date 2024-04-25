// MarkdownComponents.js

export const components = {
  // Headers
    h1: ({ node, ...props }) => <h1 style={{ fontSize: '2em', color: '#333', fontWeight: 'bold' }} {...props} />,
    h2: ({ node, ...props }) => <h2 style={{ fontSize: '1.5em', color: '#333', fontWeight: 'bold'}} {...props} />,
    h3: ({ node, ...props }) => <h3 style={{ fontSize: '1.2em', color: '#333',fontWeight: 'bold' }} {...props} />,
    h4: ({ node, ...props }) => <h4 style={{ fontSize: '1em', color: '#333' ,fontWeight: 'bold'}} {...props} />,
    h5: ({ node, ...props }) => <h5 style={{ fontSize: '0.8em', color: '#333', fontWeight: 'bold'}} {...props} />,
    h6: ({ node, ...props }) => <h6 style={{ fontSize: '0.7em', color: '#333' ,fontWeight: 'bold'}} {...props} />,
   
    // Paragraphs
    p: ({ node, ...props }) => <p style={{ fontSize: '1em', color: 'black' }} {...props} />,
   
    // Code blocks
    code: ({ node, ...props }) => <code style={{ backgroundColor: 'lightgray', padding: '2px' }} {...props} />,
    pre: ({ node, ...props }) => <pre style={{ backgroundColor: 'lightgray', padding: '10px' }} {...props} />,
   
    // Lists
    ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} {...props} />,
    ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} {...props} />,
    li: ({ node, ...props }) => <li style={{ marginBottom: '5px' }} {...props} />,
   
    // Links
    a: ({ node, ...props }) => <a style={{ color: 'blue', textDecoration: 'underline' }} {...props} />,
   
    // Images
    img: ({ node, ...props }) => <img style={{ maxWidth: '100%', height: 'auto' }} {...props} />,
   
    // Blockquotes
    blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '3px solid gray', paddingLeft: '10px', color: 'gray' }} {...props} />,
   
    // Emphasis
    em: ({ node, ...props }) => <em style={{ fontStyle: 'italic' }} {...props} />,
    strong: ({ node, ...props }) => <strong style={{ fontWeight: 'bold' }} {...props} />,
   
    // Horizontal rule
    hr: ({ node, ...props }) => <hr style={{ border: 'none', borderTop: '1px solid gray', margin: '20px 0' }} {...props} />,
    table: ({ node, ...props }) => <table style={{ width: '100%', borderCollapse: 'collapse' }} {...props} />,
    thead: ({ node, ...props }) => <thead style={{ backgroundColor: '#f2f2f2' }} {...props} />,
    tbody: ({ node, ...props }) => <tbody {...props} />,
    tr: ({ node, ...props }) => <tr {...props} />,
    th: ({ node, ...props }) => <th style={{ border: '1px solid #ddd', padding: '8px' }} {...props} />,
    td: ({ node, ...props }) => <td style={{ border: '1px solid #ddd', padding: '8px' }} {...props} />,
   };
