SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
	did INT,
	dname VARCHAR(10),
	empCount INT
);
INSERT INTO dept VALUES
('10','研发部','3'),
('20','市场部','2'),
('30','运营部','1');
CREATE TABLE emp(
	eid INT PRIMARY KEY,
	ename VARCHAR(10),
	sex VARCHAR(1),
	birthday DATE,
	salary DECIMAL(8,2),
	deptid INT
);
INSERT INTO emp VALUES
('1','Tom','M','1990-08-08','5000.00','10'),
('2','Kate','F','1991-07-08','5500.00','20'),
('3','John','M','1992-06-08','6500.00','30');