import { useMarkdown } from "./Markdown";
import { useCallback } from "react";
const SectionSelector = () => {
  const { setMarkdown } = useMarkdown();
  const sections = [
    "Title",
    "Description",
    "Installation",
    "Usage",
    "Contributing",
    "Support",
    "Roadmap",
    "Acknowledgement",
    "License",
    "API",
    "Testing",
    "Deployment",
    "Troubleshooting",
    "Security",
    "FAQ",
    "Credits",
  ];

  const handleSectionSelect = useCallback(
    (section) => {
      const sectionMarkdown = {
        // Your sectionMarkdown object...
        Title: "#Project Title\n --- \nProject Title",
        Acknowledgement:
          "# Acknowledgement\n\nThank you for using this project!",
        License: "# License\n\nThis project is licensed under the MIT License.",
        Description: "# Description\n\nThis is a sample description.",
        Installation:
          "# Installation\n\nTo install this project, follow these steps:\n\n1. Clone the repository.\n2. Install dependencies.\n3. Run the project.",
        Usage: `# Usage\n\nHere are some examples of how to use this project:\n\n\`\`\`\nconst example = require('example');\nconsole.log(example.doSomething());\n\`\`\``,
        Contributing:
          "# Contributing\n\nWe welcome contributions from the community. Please read our [CONTRIBUTING.md](https://github.com/yourusername/yourproject/blob/main/CONTRIBUTING.md) for guidelines on how to contribute.",
        Support:
          "# Support\n\nIf you need help, please open an issue on our [GitHub repository](https://github.com/yourusername/yourproject/issues).",
        Roadmap:
          "# Roadmap\n\nHere is a high-level overview of our roadmap:\n\n- Feature 1\n- Feature 2\n- Feature 3",

        FAQ: "# FAQ\n\nFrequently Asked Questions:\n\n- **Q:** How do I do X?\n - **A:** You can do X by...\n- **Q:** What about Y?\n - **A:** Y is handled by...",
        API: "# API\n\nThis section provides details on the project's API, including endpoints, request/response formats, and examples.",
        Testing:
          "# Testing\n\nInstructions on how to run tests, including any necessary setup or configuration.",
        Deployment:
          "# Deployment\n\nGuidelines for deploying the project, including any prerequisites or steps.",
        Troubleshooting:
          "# Troubleshooting\n\nCommon issues and their solutions.",
        Security:
          "# Security\n\nInformation about the project's security practices and guidelines.",
        Credits:
          "# Credits\n\nAcknowledgments and credits to contributors and third-party resources.",
      };

      if (Object.prototype.hasOwnProperty.call(sectionMarkdown, section)) {
        setMarkdown(
          (prevMarkdown) => prevMarkdown + "\n\n" + sectionMarkdown[section]
        );
      } else {
        console.error(`Section "${section}" not found.`);
      }
    },
    [setMarkdown]
  );

  return (
    <div className="w-full h-full p-3 overflow-auto">
    <p>Section</p> 
      {sections.map((section, index) => (
        <button
          key={index}
          onClick={() => handleSectionSelect(section)}
          className=" w-full mb-2 p-2 border border-gray-300 text-left"
          aria-label={`Select ${section} section`}
        >
          {section}
        </button>
      ))}

    </div>
  );
};

export default SectionSelector;
