var year;
year=1998;
(year%4==0 && year%100!==0) || year%400==0 ? console.log('闰年') : console.log('不是闰年');