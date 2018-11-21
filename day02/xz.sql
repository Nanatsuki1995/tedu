#设置客户端连接服务器使用的编码为UTF8
SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
#创建数据库是，设置存储的编码为UTF8
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE user(
	uid INT,
	uname VARCHAR(20),
	upwd VARCHAR(20),
	email VARCHAR(20),
	phone INT,
	sex VARCHAR(1),
	user_name VARCHAR(6),
	registerTime INT
);
INSERT INTO user VALUES
('01','xxnnnaaa','xxnnaa','5555555@qq.com','13900000011','F','Kate','20180201'),
('02','xxnnnaaa','xxnnaa','6666666@qq.com','13900000012','M','杨燕','20180202'),
('03','xxnnnaaa','xxnnaa','7777777@qq.com','13900000013','F','Katty','20180203');
SELECT * FROM user;