import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/homepage.css';
import markdown from './markdown.png';

function Homepage() {
  return (
    <div>
      {/* <h1>Markdown Previewer</h1> */}
      <div>
        <h1>Markdown Tutorial</h1>
        <p>Markdown is a lightweight markup language used for creating formatted text. It was designed to be easy to read and write, and to convert to HTML and other formats.</p>
        <img src={markdown} style={{height:"600px",width:"600px",borderTopWidth:'10px'}} alt='' />
        <h2>Header
       </h2>
        <p>Headers are created using the # symbol followed by a space and the header text. The number of # symbols determines the level of the header.</p>
        <h2>Emphasis</h2>
        <p>
        Use an asterisk (*) or underscore (_) to create italicized or bold text. For italicized text, use a single asterisk or underscore before and after the text. For bold text, use two asterisks or underscores before and after the text.
        </p>
        <h2>
          Lists
        </h2>
        <p>
        To create an unordered list, use an asterisk (*), hyphen (-), or plus sign (+) followed by a space. To create an ordered list, use numbers followed by a period and a space.
        </p>
        <h2>
          Links
        </h2>
        <p>
        To create a link, enclose the link text in square brackets ([ ]) and the URL in parentheses (()). You can also add a title for the link inside the parentheses.
        </p>
        <footer className='footerbar'>
          <h1>
            Reference Links
          </h1>
          <a href='https://en.wikipedia.org/wiki/Markup_language'>Wikipedia</a>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
