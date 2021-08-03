DROP DATABASE IF EXISTS workout;

CREATE DATABASE workout;
DROP TABLE IF EXISTS exercise;

CREATE TABLE exercise(
exercise_id SERIAL PRIMARY KEY,
    "name" varchar(50),
    reps integer,
    duration integer
);


INSERT INTO exercise (name, reps, duration) VALUES ('Push Up', 60, 60);