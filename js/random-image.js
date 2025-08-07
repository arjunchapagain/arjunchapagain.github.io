document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/IMG_5554.jpeg',
        'images/IMG_5736.jpeg',
        'images/IMG_6014.jpeg'
    ];
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const randomIndex = Math.floor(Math.random() * images.length);
        profileImage.src = images[randomIndex];
    }
});
