//function take arguments, create  new book using book constructor. store book object into array.

const myLibrary = [];

function Book(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
}

function addBookToLibrary(title, author) {
    let randomBookID = crypto.randomUUID();
    let book = new Book(title, author, randomBookID);
    myLibrary.push(book);
}


function displayBooks () {
    const outerDiv = document.createElement("div");
    outerDiv.style.height = "100vh";
    outerDiv.style.width = "100vw";
    outerDiv.style.display = "flex";
    outerDiv.style.gap = "20px";
    outerDiv.style.justifyContent = "center";
    document.body.appendChild(outerDiv);

    myLibrary.forEach(book => {
        const container = document.createElement("div");
        container.style.height = (100 / myLibrary.length) +"vh";
        container.style.width = (100 / myLibrary.length) +"vw - 20px";
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.backgroundColor = "grey";
        container.style.borderColor = "white";
        outerDiv.appendChild(container);

        const title = document.createElement("h1");
        title.textContent = book.title;
        container.appendChild(title);

        const author = document.createElement("h2");
        author.textContent = book.author;
        container.appendChild(author);

        const id = document.createElement("p");
        id.textContent = book.id;
        container.appendChild(id);
    })
}