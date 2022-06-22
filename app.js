let author = 'محمود ♊';
let newTweetText = document.querySelector('.post-tweet-text');
let tweetButton = document.querySelector('.tweet-button');
let arrayOfTweets = [{
    author: author,
    tweetText: "Hi there let's pin this tweet! "
}]
let mainSection = document.querySelector('.main-feed');
let tweetsBox = document.querySelector('.feed-tweet-dom');
mainSection.appendChild(tweetsBox);

function builtTweet() {
    arrayOfTweets.forEach((tweet) => {
        let newFeedTweet = document.createElement('div');
        tweetsBox.prepend(newFeedTweet);
        newFeedTweet.className = 'feed-tweet';
        /*newFeedTweet.setAttribute('flex-direction', 'column');*/

        let newDiv = document.createElement('div'); ///* root
        newFeedTweet.append(newDiv);
        newDiv.className = 'tweet-img'

        let userimg = document.createElement('img');
        newDiv.append(userimg);
        userimg.className = 'tweet-img';
        userimg.setAttribute('src', './myprityface.jpg')

        let newFeedTweetdetails= document.createElement('div');///* root
        newFeedTweet.append(newFeedTweetdetails);
        newFeedTweetdetails.className = 'feed-tweet-details';

        let TweeterDetailsdiv = document.createElement('div');// same
        //newFeedTweetdetails.prepend(TweeterDetailsdiv);
        TweeterDetailsdiv.className = 'tweeter-details';
        newFeedTweetdetails.append(TweeterDetailsdiv);

        let linkName = document.createElement('a');
        TweeterDetailsdiv.append(linkName);
        linkName.className = 'tweeter-name';
        linkName.textContent = tweet.author;

        let spanName= document.createElement('span');
        linkName.append(spanName);
        spanName.className = 'tweeter-handle';
        spanName.textContent = '@mzughbor ~ 1.min';

        let TweetTextClass = document.createElement('div');// same
        //newFeedTweetdetails.prepend(TweetTextClass);
        TweetTextClass.className = 'tweet-text';
        newFeedTweetdetails.appendChild(TweetTextClass);

        let newText = document.createElement('p')
        TweetTextClass.appendChild(newText)
        newText.textContent = tweet.tweetText;

        let listIcons = document.createElement('div');// same
        //newFeedTweetdetails.prepend(listIcons);
        listIcons.className = "tweet-icons";
        newFeedTweetdetails.appendChild(listIcons);

        //let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
        let icons = document.createElement('svg');      
        icons.className = "main-svg";
        icons.setAttribute('viewBox', '0 0 24 24');
        listIcons.appendChild(icons);

        let gtag = document.createElement('g');
        gtag.className = 'myg';

        icons.appendChild(gtag);
        /*
        let pathTag = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        pathTag.setAttribute("d", "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z");
        //pathTag.style.stroke = "#cccbcb";   
        //pathTag.style.strokeWidth = "1px";  
        gtag.appendChild(pathTag);
        */
        
        const svg = document.querySelector('.myg');  
        console.log(svg);
        const newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path');  
        newElement.setAttribute("d", "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z");   
        newElement.setAttribute("class", "sss")
        svg.appendChild(newElement);
        // i'm really confused about this issue I have set up and looked about it in consloe every thing is great but still not shown from the first time -- the thing confusing me her if i edit the svg as an HTML element this svg will shown right away ! so whats the issue ????? oh !
    })
}

// this is done //
tweetButton.addEventListener('click', (e) => {
    let tweetDetails = {
        author: author,
        tweetText: newTweetText.value
    };
    arrayOfTweets.push(tweetDetails)
    e.preventDefault();
    tweetsBox.textContent = "";
    builtTweet()
    newTweetText.value = ""
});

