// Function to retrieve existing blog posts from local storage
function getBlogPostsFromStorage() {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
}

// Function to display blog posts
function displayBlogPosts() {
    const blogListContainer = document.getElementById('blogList');
    const blogPosts = getBlogPostsFromStorage();

    // Clear existing content
    blogListContainer.innerHTML = '';

    // Display each blog post
    blogPosts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Author:</strong> ${post.username}</p>
            <p>${post.content}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        blogListContainer.appendChild(postElement);
    });

    // Add event listener to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDeleteButtonClick);
    });
}

// Function to handle delete button click
function handleDeleteButtonClick(event) {
    const index = event.target.dataset.index;
    deleteBlogPost(index);
    displayBlogPosts(); // Refresh the display after deletion
}

// Function to delete a blog post
function deleteBlogPost(index) {
    const blogPosts = getBlogPostsFromStorage();
    blogPosts.splice(index, 1);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Display existing blog posts on page load
displayBlogPosts();

// Go back button
function goBack() {
    location.replace('./index.html');
}