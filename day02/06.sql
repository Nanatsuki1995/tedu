DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi;
USE xuezi;
CREATE TABLE laptop(
	lid INT,
	title VARCHAR(6),
	price INT,
	number INT
);
INSERT INTO laptop VALUES
	('02','K99','5999','99'),
	('03','K100','6999','199'),
	('03','K110','7999','150');
SELECT * FROM laptop;