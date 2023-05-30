let users = [{
    id: 1,
    username: 'admin',
    password: 'admin',
    role: 'admin'
}];

let articles = [];
let comments = [];

class User {
    constructor(role = 'user') {
        this.role = role;
    }

    login(username, password) {
        let user = users.find(user => user.username === username);
        if (user && user.password === password) {
            return user;
        }
        new Error('Invalid username or password');
    }

    register(userObj) {
        let user = users.find(user => user.username === userObj.username);
        if (user) {
            console.log('Username already exists');
        } else {
            if (userObj.role === 'admin') {
                console.log('You are not allowed to register as admin');
            } else {
                users.push(userObj);
            }
        }
    }

    isAdmin(user) {
        if (user !== undefined) {
            if (user.role === 'admin') {
                return true;
            } else {
                console.log('You are not allowed to add articles or comments');
                return false;
            }
        }
    }

    addArticle(title, content) {
        const article = new Article(title, content, this);
        articles.push(article);
        return article;
    }

    addComment(content, article) {
        const comment = new Comment(content, this);
        comments.push(comment);
        article.addComment(comment);
        return comment;
    }
}

class Article {
    constructor(title, content, author) {
        this.id = articles.length + 1;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = new Date();
    }

    addComment(comment) {
        comments.push(comment);
    }
}

class Comment {
    constructor(content, author) {
        this.id = comments.length + 1;
        this.content = content;
        this.author = author;
    }
}

let user1 = new User();
user1.register({
    id: 2,
    username: 'user',
    password: 'user',
    role: 'user'
})

let isAdmin = user1.isAdmin(user1.login('user', 'admin'));
let article1 = user1.addArticle('JavaScript Basics', 'Content goes here...');
let article2 = user1.addArticle('HTML and CSS', 'Content goes here...');

if (isAdmin) {
    user1.addComment('Great article!', article2);
    user1.addComment('Nice job!', article1);
} else {
    console.log('You are not allowed to add articles or comments');
}

let isUser = user1.isAdmin(user1.login('user', 'user'));
if (!isUser) {
    user1.addComment('Great article!', article2);
    user1.addComment('Nice job!', article1);
} else {
    console.log('You are not allowed to add articles or comments');
}

console.log(users);
console.log(articles);
console.log(comments);