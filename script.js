class LibraryItem {
    constructor (title, author, publishedyear) { 
        this.title = title;
        this.author = author;
        this.publishedyear = publishedyear;
    }
    getDetails(){
        console.log(`title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Published Year: ${this.publishedyear}`);
    }
}
class Book extends LibraryItem {
    constructor(title, author, publishedyear, genre){
        super(title, author, publishedyear)
        this.genre = genre;
    }
    getDetails(){
        super.getDetails()
        console.log(`genre: ${this.genre}`);
    }
 }
 class Magazine extends LibraryItem {
    constructor(title, author, publishedYear, issueNumber) {
        super(title, author, publishedYear);
        this.issueNumber = issueNumber;
    }

    getDetails() {
        super.getDetails();
        console.log(`Issue Number: ${this.issueNumber}`);
    }
}

const Book1 = new Book("Terminator", "Cameron", 1984, "Cyberpunk")
const Magazine1 = new Magazine("Discovery", "USA", 2020, 5000 )


console.log('Book Details:');
Book1.getDetails();


console.log('Magazine Details:');
Magazine1.getDetails();