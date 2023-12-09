const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerOfPosts = document.querySelector(".containerPosts");

posts.forEach((artistPost, index) => {
    
    // Created single post 'div' container
    const singlePost = document.createElement('div')
    singlePost.classList.add('singlePost')
  

containerOfPosts.innerHTML=`
    <section class="postsHeader">
        <img src="${artistPost.avatar}" alt="user avatar photo" class="avatar">
        <div class="userInfo">
            <span class="user-name">${artistPost.name}</span>
            <br><span class="post-location">${artistPost.location}</span></br>
        </div>

        <img src="${artistPost.post}" alt="post image" class="post-size">
        <div class="like-section like-number">
            <img src="images/icon-heart.png" alt="like icon" id="like-${index}" class="heart-icon">
            <img src="images/icon-comment.png" alt="comment icon">
            <img src="images/icon-dm.png" alt="dm icon">
        </div>

        <div class="like-number">
          <br><span class="likes like-count">${artistPost.likes} likes</span></br>
          <p class="boldText"><span>${artistPost.username}</span> ${artistPost.comment}</p>
        </div>
    </section>
 `

containerOfPosts.appendChild(singlePost)


const heartBtn = document.querySelector(`#like-${index}`)
const likeCount = document.querySelector('.like-count')

heartIcon.addEventListener('dblclick', function () {
    artistPost.likes++;
    likeCount.textContent = artistPost.likes + " " + "likes";
    heartIcon.src = "/images/icon-heart-red.png";
  });
});