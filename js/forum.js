document.getElementById('addPostBtn').addEventListener('click', function() {
    var nameInput = document.getElementById('nameInput');
    var postInput = document.getElementById('postInput');
    var forumPosts = document.getElementById('forumPosts');

    if (nameInput.value.trim() !== '' && postInput.value.trim() !== '') {
        var postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        var postInfoDiv = document.createElement('div');
        postInfoDiv.className = 'post-info';
        var nameHeader = document.createElement('h3');
        nameHeader.textContent = nameInput.value;
        postInfoDiv.appendChild(nameHeader);
        
        var postContentDiv = document.createElement('div');
        postContentDiv.className = 'post-content';
        var postContent = document.createElement('p');
        postContent.textContent = postInput.value;
        postContentDiv.appendChild(postContent);

        postDiv.appendChild(postInfoDiv);
        postDiv.appendChild(postContentDiv);

        forumPosts.appendChild(postDiv);

        nameInput.value = '';
        postInput.value = '';
    }
});
