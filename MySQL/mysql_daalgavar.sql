show databases;
create database daalgavar;
USE daalgavar;

CREATE TABLE books (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
title varchar(255),
author varchar(255),
published_date date,
isbn varchar(255)
);

CREATE TABLE user_books (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_id int,
book_id int,
checkout_date timestamp,
return_date timestamp
);

CREATE TABLE users (
id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255),
last_active timestamp
);

 CREATE TABLE addresses (
 id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
 user_id int,
 city text,
 street text
 );
 
 CREATE TABLE reviews (
 id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
 user_id int,
 book_id int,
 review_comment text,
 created_date timestamp
 );
 
 ALTER TABLE user_books
 ADD CONSTRAINT fk_userbooks_book_id
	FOREIGN KEY (book_id)
    REFERENCES books (id);
    
ALTER TABLE reviews
ADD CONSTRAINT  fk_reviews_book_id
	FOREIGN KEY (book_id)
    REFERENCES books (id);
    
ALTER TABLE addresses
ADD CONSTRAINT fk_addresses_user_id
	FOREIGN KEY (user_id)
    REFERENCES users (id);
    
ALTER TABLE reviews
ADD CONSTRAINT fk_reviews_user_id
	FOREIGN KEY (user_id)
    REFERENCES users (id);
    
ALTER TABLE user_books
ADD CONSTRAINT fk_userbooks_user_id
	FOREIGN KEY (user_id)
    REFERENCES users (id);

ALTER TABLE books
ADD CONSTRAINT ak_isbn UNIQUE (isbn);

INSERT INTO users (name, last_active) VALUES ("A", current_timestamp());
INSERT INTO users (name, last_active) VALUES ("B", current_timestamp());
INSERT INTO users (name, last_active) VALUES ("C", current_timestamp());
INSERT INTO users (name, last_active) VALUES ("D", current_timestamp());
INSERT INTO users (name, last_active) VALUES ("E", current_timestamp());
INSERT INTO users (name, last_active) VALUES ("F", current_timestamp());

INSERT INTO books (title, author, published_date, isbn) VALUES ("Educated", "Tara Westover", "2017-11-22", "123456");
INSERT INTO books (title, author, published_date, isbn) VALUES ("Black Cake", "Charmaine Wilkerson", "2017-11-22", "123457");
INSERT INTO books (title, author, published_date, isbn) VALUES ("Influence Is Your Superpower", "Zoe Chance", "2017-11-22", "123458");
INSERT INTO books (title, author, published_date, isbn) VALUES ("Very Cold People", "Sarah Manguso", "2017-11-22", "123459");
INSERT INTO books (title, author, published_date, isbn) VALUES ("The Accomplice", "Lisa Lutz", "2017-11-22", "123460");
INSERT INTO books (title, author, published_date, isbn) VALUES ("The Impossible City", "Karen Cheung", "2017-11-22", "123461");
INSERT INTO books (title, author, published_date, isbn) VALUES ("The Good American", "Robert D. Kaplan", "2017-11-22", "123462");

-- INSERT INTO user_books (user_id, book_id, checkout_date, return_date)
-- VALUE ("1", "2", DATEADD(DAY, -15, GETDATE()), current_date());

INSERT INTO user_books (user_id, book_id, checkout_date, return_date) VALUE ("2", "4", "2022-02-11", "2022-02-22");
INSERT INTO user_books (user_id, book_id, checkout_date, return_date) VALUE ("3", "7", "2022-02-11", "2022-02-22");
INSERT INTO user_books (user_id, book_id, checkout_date, return_date) VALUE ("4", "7", "2022-02-15", "2022-02-22");
INSERT INTO user_books (user_id, book_id, checkout_date, return_date) VALUE ("4", "7", "2022-02-15", "2023-02-22");

INSERT INTO reviews (user_id, book_id, review_comment, created_date) VALUE ("1", "2", "'1', '1', '2', '“At turns delightfully juicy and then stunningly wise, Black Cake is a winner.”—Taylor Jenkins Reid, New York Times bestselling author of The Seven Husbands of Evelyn Hugo and Daisy Jones & The Six', '2022-02-22 00:00:00'", current_date());
INSERT INTO reviews (user_id, book_id, review_comment, created_date) VALUE ("2", "4", "“Very Cold People reminded me of My Brilliant Friend.”—The New Yorker", current_date());
INSERT INTO reviews (user_id, book_id, review_comment, created_date) VALUE ("3", "7", "“One of the best accounts examining American humanitarian pursuits over the past fifty years . . .”—The Washington Post", current_date());
SELECT * FROM addresses;

INSERT INTO addresses (user_id, city, street) VALUE ("1", "Ulaanbaatar", "Ikh Khuree st.");
INSERT INTO addresses (user_id, city, street) VALUE ("2", "Darkhan", "Ikh Khuree st.");

-- 01 
SELECT *
FROM books
WHERE year(published_date) < "2010";

-- 02
SELECT COUNT(*)
FROM books
WHERE year(published_date) < "2010";

-- 03
ALTER TABLE users
ADD COLUMN age INT AFTER name;

-- 04
SELECT user_id
FROM addresses
WHERE NOT city = "Ulaanbaatar";

-- 05
SELECT user_id
FROM user_books
WHERE return_date > current_date();

-- 06
SELECT user_id
FROM user_books
ORDER BY checkout_date DESC
LIMIT 1;

-- 07
SELECT *
FROM reviews
WHERE month(created_date) = month(current_date());

-- 08
SELECT *
FROM books
WHERE  published_date > "2022-01-01";

-- 09
SELECT *
FROM books
WHERE title LIKE "%the%";

-- 10
SELECT user_id
FROM user_books
WHERE return_date < current_date();

-- 11
SELECT *
FROM books
WHERE year(current_date()) - year(published_date) > "10";

show tables;