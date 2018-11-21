SET NAMES UTF8;
CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE book(
	bid INT,
	title VARCHAR(20),
	price INT,
	pubDate VARCHAR(20),
	isJia INT
);
INSERT INTO book VALUES
('01','书名一','36','2016年10月','1'),
('02','书名一','36','2016年10月','1'),
('03','书名一','36','2016年10月','1'),
('04','书名一','36','2016年10月','1');
UPDATE book SET
price='37' WHERE bid='02';
DELETE FROM book WHERE bid='03';