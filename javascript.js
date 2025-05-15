//function take arguments, create  new book using book constructor. store book object into array.

const myLibrary = [];

Book.prototype.markRead = function() {
    console.log("test");
    if (this.read) {
        this.read = false;
    } else {
        this.read = true;
    }
}

function Book(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.read = false;
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
        container.style.height = "30vh";
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

        const removeBook = document.createElement("button");

        removeBook.addEventListener("click", function() {
            myLibrary.splice(myLibrary.indexOf(book), 1);

            if(document.body.querySelector("div") != null) {
                const outerDiv = document.body.querySelector("div");
                outerDiv.remove()
            }

            displayBooks();
        })

        removeBook.style.width = "128px";
        removeBook.style.height = "48px";
        removeBook.style.margin = "auto";
        removeBook.style.padding = "5px";
        removeBook.textContent = "Remove";

        container.appendChild(removeBook);

        const markRead = document.createElement("button");

        markRead.style.width = "128px";
        markRead.style.height = "48px";
        markRead.style.margin = "auto";
        markRead.style.padding = "5px";
        markRead.textContent = "Read";

        if (book.read) {
            markRead.style.backgroundColor = "green";
        } else {markRead.style.backgroundColor = "red";}

        markRead.addEventListener("click", function() {
            book.markRead();
            if (book.read) {
                markRead.style.backgroundColor = "green";
            } else {markRead.style.backgroundColor = "red";}
        })


        container.appendChild(markRead);
    })
}

const newBookButton = document.getElementById("newBookButton");
newBookButton.addEventListener("click", function() {

    if(document.body.querySelector("div") != null) {
        const outerDiv = document.body.querySelector("div");
        outerDiv.remove()
    }


    const form = document.createElement("form");
    form.style.width = "40vw";
    form.style.height = "40vh";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.justifyContent = "center";
    form.style.alignItems = "center";
    form.style.gap = "50px";
    form.style.margin = "auto";

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "5px";

    const bookText = document.createElement("label");
    bookText.textContent = "Book Name?";
    container.appendChild(bookText);

    const bookInput = document.createElement("input");
    bookInput.type = "text";
    container.appendChild(bookInput);

    form.appendChild(container);




    container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "5px";

    const authorText = document.createElement("label");
    authorText.textContent = "Book Author?";
    container.appendChild(authorText);

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    container.appendChild(authorInput);

    form.appendChild(container);



    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.style.width = "128px";
    submitButton.style.height = "48px";


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.remove();
        document.body.appendChild(newBookButton);

        const title = bookInput.value;
        const author = authorInput.value;

        addBookToLibrary(title, author);
        displayBooks();
    })

    form.appendChild(submitButton);

    document.body.appendChild(form);

    newBookButton.remove();
})