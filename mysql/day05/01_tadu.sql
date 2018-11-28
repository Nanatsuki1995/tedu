SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE dept(
	did TINYINT PRIMARY KEY,
	dname VARCHAR(10)
);
INSERT INTO dept VALUES
('10','研发部'),
('20','市场部'),
('30','运营部'),
('40','测试部');
CREATE TABLE emp(
	eid INT PRIMARY KEY AUTO_INCREMENT,
	ename VARCHAR(10),
	sex VARCHAR(1),
	birthday DATE,
	salary DECIMAL(7,2),
	deptid TINYINT,
	FOREIGN KEY(deptid) REFERENCES dept(did)
);
INSERT INTO emp VALUES
('1','Tom','M','1994-7-8','5000.00','10'),
(NULL,'Tim','M','1994-7-8','5000.00','20'),
(NULL,'Tam','M','1994-7-8','5000.00','30'),
(NULL,'Tos','M','1994-7-8','5000.00',NULL);