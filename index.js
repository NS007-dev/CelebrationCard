var button = document.getElementById("button"),
    buttonText = document.getElementById("buttontext"),
    c = document.querySelector('#button'),
    root = document.documentElement;

button.onclick = (function () {
    var phrases = [
        "Click This...",
        "🎂Happy Birthday!🎂",
        "Thank you for teaching us how to code",
        "You are awesome!!!",
        "You are sooo cool!!",
        "I hope you have a GREAT day!!!",
        "Thank you soooo much.",
        "Happy Birthday!!!",
        "Keep enjoying your pizzas 🍕",
        "And your Choc Chip Cookies!!! 🍪"
    ],

        bImages = [
            "https://media2.giphy.com/media/KecDcIs9qrqennrxGQ/giphy.gif?cid=6c09b952449ae9cr8dmqvpo2bulkad4lzy6d9u9u3ywvbm8o&rid=giphy.gif&ct=s",
            "https://i.pinimg.com/originals/d9/e3/63/d9e3630d886301c7af9ea95fcb85726b.gif",
            "https://image.freepik.com/free-vector/colorful-illustration-female-programmer-working_23-2148277397.jpg",
            "https://antimaximalist.com/wp-content/uploads/2020/03/3.jpg",
            "https://media2.giphy.com/media/leqhMgWOsy8Ja/giphy.gif",
            "https://media.giphy.com/media/3o7aDdqH8R97grlCSc/giphy.gif",
            "https://i.pinimg.com/originals/d9/e3/63/d9e3630d886301c7af9ea95fcb85726b.gif",
            "https://media2.giphy.com/media/RlZouK6QqVVHNIxp6I/200w.gif?cid=82a1493b41t6f2oesudnkaxnkvmglng1w5szithlufyzhcmu&rid=200w.gif&ct=g",
            "https://i.pinimg.com/originals/9f/14/9b/9f149b761df9edfbe9463985dce21132.gif",
            "https://i0.wp.com/www.janespatisserie.com/wp-content/uploads/2020/04/nyccookies.jpg?resize=500%2C1000&ssl=1"
        ]

    var count = 0;
    var imageCount = 0;
    return function () {
        root.style.setProperty('--image', "url(" + bImages[++count % phrases.length] + ")");
        buttonText.textContent = phrases[++imageCount % phrases.length];
    };
}());
