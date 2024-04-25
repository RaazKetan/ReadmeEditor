import ReactMarkdown from 'react-markdown';
import { useMarkdown } from './Markdown';

import { components } from './MarkdownComponents';


const Preview = () => {
  const { markdown } = useMarkdown();
 
   
   

 return (
    <div className="w-full h-full p-4 border border-gray-300">
    <p className="text-lg font-semibold">Preview</p>
      <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
    </div>
 );
};
export default Preview;
