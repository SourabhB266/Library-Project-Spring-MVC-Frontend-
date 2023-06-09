let category = document.querySelector('#category');
let bookId = document.querySelector('#bookid');
let bookTitle = document.querySelector('#booktitle');
let author = document.querySelector('#author');
let edition = document.querySelector('#edition');
let no_of_books = document.querySelector('#no_of_books');

let flag = true;

document.addEventListener("submit", (e) => {
    e.preventDefault();
    add();
});

async function add() {

    let resp = await fetch("http://localhost:8080/Library_With_MVC/getBookById?id=" + bookId.value);
    console.log(resp.status);
    console.log(200);

    if (resp.status === 200) {
        document.querySelector('#msg').innerHTML = "Book Id Already Exist..";
        setTimeout(() => document.querySelector("#msg").innerHTML = "", 2000);
        setTimeout(() => location.reload(), 2000);
        flag = false;
    }

    else if(flag) {
        console.log("save book")
        let books =
        {
            catagory: category.value,
            bookId: bookId.value,
            bookTitle: bookTitle.value,
            author: author.value,
            edition: edition.value,
            no_of_books: no_of_books.value,
        }
        let url = "http://localhost:8080/Library_With_MVC/saveBook";
        let par = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(books)
        }
        await fetch(url, par);
        document.querySelector('#msg').innerHTML = "Book Added Successfully..";
        setTimeout(() => document.querySelector("#msg").innerHTML = "", 2000);
        setTimeout(() => location.reload(), 2000);
    }

}

