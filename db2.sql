drop table Aplikimet
create table Aplikimet(
	Id int identity(1,1) primary key,
	IdUser int REFERENCES Users(Id),
	Pushimi varchar(255),
	DataFillimit date,
	DataMbarimit date,
	Pershkrimi varchar(500)
)

select u1.* , u2.*
from Users u1 join Aplikimet u2 on (u1.Id = u2.IdUser)
where u2.IdUser=1;