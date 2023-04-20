
import React, { useState } from 'react';
import {marked} from 'marked';
import '../styles/markdownEditor.css';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('# Heading Tag');
  const [html, setHtml] = useState('');

  function handleChange(e) {
    const markdownText = e.target.value;
    setMarkdown(markdownText);
    setHtml(marked.parse(markdownText));
  }

  return (
    <div className='main'>
      <h2>Markdown Editor</h2>
      <div className="editor">
        <textarea className='input' value={markdown} onChange={handleChange} />
        {/* <h2>Markdown Output</h2> */}
        <div
          className="preview" style={{marginLeft:'8%',marginRight:'8%',borderWidth:'1%',color:'Blue'}}
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
        <div>
          <h2 >
            Raw HTML
          </h2>
          <textarea value={html} readOnly />
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;