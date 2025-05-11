import { useState } from 'react';
import { marked } from 'marked';
import html2pdf from 'html2pdf.js';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleExport = () => {
    const element = document.getElementById('preview');
    html2pdf().from(element).save('markdown.pdf');
  };

  const handleCopy = async () => {
    const element = document.getElementById('preview');
    const html = element.innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    try {
      await navigator.clipboard.write([clipboardItem]);
      alert('Rich text copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Copy failed. Your browser may not support rich text clipboard.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          flex: 1,
          padding: '1rem',
          fontSize: '16px',
          border: 'none',
          outline: 'none',
          resize: 'none'
        }}
        placeholder="Write your markdown here..."
      />
      <div style={{ flex: 1, padding: '1rem', borderLeft: '1px solid #ccc' }}>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          style={{ marginBottom: '1rem' }}
        />
        <button onClick={handleExport} style={{ marginRight: '1rem' }}>
          Export PDF
        </button>
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
}

export default App;
