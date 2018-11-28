SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop(
	lid INT,
	title VARCHAR(128),
	price DECIMAL(7,2),
	stockCount SMALLINT,
	shelfTime DATE,
	isIndex BOOL
);
INSERT INTO laptop VALUES
('01','联想','5990.00','100','2018-02-1',TRUE),
('02','惠普','5990.10','200','2018-04-1',FALSE),
('03','神舟','5990.20','300','2018-06-1',1),
('04','苹果','5990.30','400','2018-08-1',TRUE);