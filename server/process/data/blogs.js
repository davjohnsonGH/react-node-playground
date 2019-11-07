const config = require('../../config');

module.exports = () => {

    const data = {
        blogs: []
    }
    
    for (let i = 0; i < config.numberOfBlogs; i++) {

        const blogContent = require( '../../temp/blogs/blog' + i + '.json' );
        data.blogs.push(blogContent);
        
    }

    return data;
    
};
  