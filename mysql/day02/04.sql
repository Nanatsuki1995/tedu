#�������ݿ⣬�������jd
DROP DATABASE IF EXISTS jd;
#�������ݿ�jd
CREATE DATABASE jd;
#�������ݿ�jd
USE jd;
#�������ݱ�
CREATE TABLE student(
	sid INT, #integer ����
	name VARCHAR(6), #variable character\
	sex VARCHAR(1), #��->M Ů->F
	score INT
);
#����в���һ������(��¼)
INSERT INTO student VALUES('10','Tom','M','89');
INSERT INTO student VALUES('11','Jason','M','90');
INSERT INTO student VALUES('12','Julia','F','89');
INSERT INTO student VALUES('13','Bob','M','70');
INSERT INTO student VALUES('14','Enzo','M','85');
#��ѯ���ݱ��еļ�¼
SELECT * FROM student;