import { useMarkdown } from './Markdown';
import { useCallback } from 'react';



const Editor = () => {
 const { markdown, setMarkdown } = useMarkdown();



 const handleChange = useCallback((event) =>{
     setMarkdown(event.target.value);
 }, [setMarkdown]);
 
 
 return (
     <textarea
        value={markdown}
        onChange={handleChange}
        className="w-full h-full p-4 bg-[#333] text-[#fff]"
        placeholder="Write your README here..."
     />
     
 );
};



export default Editor;
