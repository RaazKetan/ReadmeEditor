// HeroSection.jsx

import Footer from "./Footer";
import Header from "./Header";
import SectionSelector from "./SectionSelector";
import {useMarkdown} from './Markdown'; // Update this line
import Editor from "./Editor";
import Preview from "./Preview";


function HeroSection() {

  const {markdown} = useMarkdown();

  const onDownload = ()=>{
    const blob = new Blob([markdown], { type: "text/plain; charset = utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href= url;
    link.download = "README.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

 return (
    <>
      <Header 
      showDownloadButton={true}
      onDownload={onDownload}
      changeHeaderTheme={true}
      />
        <div className="flex h-screen mb-3">
          <SectionSelector />
          <Editor />
          <Preview />
        </div>
      <Footer/>
    </>
 );
}

export default HeroSection;
