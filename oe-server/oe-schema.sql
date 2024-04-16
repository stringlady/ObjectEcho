CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    password TEXT NOT NULL
)

CREATE TABLE comments (
    commentId SERIAL PRIMARY KEY,
    userid INT NOT NULL,
    entryUserid INT NOT NULL,
    comment TEXT NOT NULL
)

CREATE TABLE entries (
    entryid SERIAL PRIMARY KEY,
    objectname TEXT NOT NULL,
    call TEXT NOT NULL,
    description TEXT NOT NULL
)