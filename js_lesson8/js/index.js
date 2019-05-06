function Month(month) {
    month++;
    if(month < 10) {
        month = '0'+month;
    }
    return month;
}

document.getElementById('addCommentBtn').addEventListener('click', function () {
    let commentText = document.getElementById('textarea').value;
    commentText.trim();
    let result = document.getElementById('result');
        let commentBlock = document.createElement('div');
        commentBlock.setAttribute('class','commentBlock');

        let avatar = document.createElement('img');
        avatar.setAttribute('class', 'avatar');
        avatar.setAttribute('src', 'img/man.png');

        let name = document.createElement('p');
        name.setAttribute('class','name');
        name.innerText = 'Василий';

        let time = document.createElement('p');
        time.setAttribute('class','time');
        let dd = new Date();
        time.innerText = dd.getDate()+'.'+Month(dd.getMonth())+'.'+dd.getFullYear()+ ' '+ dd.getHours()+':'+dd.getMinutes();

        let comment = document.createElement('div');
        comment.setAttribute('class','comment');
        comment.innerText = commentText;

        commentBlock.appendChild(avatar);
        commentBlock.appendChild(name);
        commentBlock.appendChild(time);
        commentBlock.appendChild(comment);

        document.getElementById('comments').appendChild(commentBlock);

        result.innerText = 'Ваш коммент успешно добавился!';

        result.classList.remove('error');
        result.classList.add('success');
})