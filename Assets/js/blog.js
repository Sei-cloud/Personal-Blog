// blog.js
window.onload = function() {
    loadBlogPosts();
    console.log('hi')
};


function loadBlogPosts() {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogList = document.getElementById('blogList');


    savedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p class="author">Written by: ${post.username}</p>
        `;
        blogList.appendChild(postElement);
        console.log(postElement);
    });
}

