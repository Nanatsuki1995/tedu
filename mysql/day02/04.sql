#丢弃数据库，如果存在jd
DROP DATABASE IF EXISTS jd;
#创建数据库jd
CREATE DATABASE jd;
#进入数据库jd
USE jd;
#创建数据表
CREATE TABLE student(
	sid INT, #integer 整型
	name VARCHAR(6), #variable character\
	sex VARCHAR(1), #男->M 女->F
	score INT
);
#向表中插入一行数据(记录)
INSERT INTO student VALUES('10','Tom','M','89');
INSERT INTO student VALUES('11','Jason','M','90');
INSERT INTO student VALUES('12','Julia','F','89');
INSERT INTO student VALUES('13','Bob','M','70');
INSERT INTO student VALUES('14','Enzo','M','85');
#查询数据表中的记录
SELECT * FROM student;