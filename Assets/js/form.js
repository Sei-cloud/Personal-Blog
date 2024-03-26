// Function to retrieve existing blog posts from local storage
function getBlogPostsFromStorage() {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
}

// Function to save new blog post to local storage
function saveBlogPostToStorage(post) {
    const blogPosts = getBlogPostsFromStorage();
    blogPosts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Function to handle form submission in index.html
function handleFormSubmission(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Save new blog post to local storage
    saveBlogPostToStorage({ username, title, content });

    // Redirect to blog.html
    window.location.href = 'blog.html';
}

// Event listener for form submission
const submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmission);
