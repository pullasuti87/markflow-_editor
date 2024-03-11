import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Code = ({ ...fields }) => {
  const language = fields.className?.replace(/language-/, '');
  return (
    <SyntaxHighlighter
      language={language}
      style={gruvboxDark}
      className="rounded-md"
    >
      {fields.children}
    </SyntaxHighlighter>
  );
};

export const Elem = ({ ...fields }) => {
  return <div className="text-sm">{fields.children}</div>;
};
