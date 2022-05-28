import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
      <div className='blog'>
        <div className="blogs">
          <h1>What is Context API?</h1>
          <p>
            Context API can pass data to multiple components without passing
            through the props or manually. Context API is an alternative of prop
            drilling.
          </p>
        </div>
        <div className="blogs">
          <h1>What is Semantic tag? </h1>
          <p>
            Semantic tags are the meaningful tags,has a meaning which can
            describe it's characteristic to developers and matchine.
          </p>
        </div>
        <div className="blogs">
          <h1>
            What's the different between Inline blocks and Inline blocks
            elements?
          </h1>
          <p>
            Inline blocks are those which can't be in another line,all the tags
            and command wiithin those tags will be in same line,it behaves as a
            block element and inline blocks elements are those elements which
            allpow other elements to sit to their right and left
          </p>
        </div>
      </div>
    );
};

export default Blog;