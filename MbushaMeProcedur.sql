use ELeaving

insert into KategoriaPushimit values ('Dite Feste')
insert into KategoriaPushimit values ('Dite e lire')
insert into KategoriaPushimit values ('Mbyllje e kompanie')


insert into Pushimet (Pushimi,Kategoria) values ('Vjetor',2)


insert into statusiPuntorit values ('Full Time')
insert into statusiPuntorit values ('Part Time')
insert into statusiPuntorit values ('Contract')

insert into Pozita values ('Full Stack')
insert into Pozita values ('Back End')
insert into Pozita values ('Front End')
insert into Pozita values ('Intern')
insert into Pozita values ('Administrative Assistant')

insert into Kompania values ('Core Labs')

insert into Departamenti (Departamenti,Kompania)values('IT',1)
insert into Departamenti (Departamenti,Kompania)values('Administration',1)

insert into Roli  values ('Staf')
insert into Roli  values ('Puntor')

insert into Users (Emri,Mbiemri,Gjinia,NrPersonal,Tel,Email,Passwordi,Statusi,Pozita,Departamenti,PushimVjetor,Viti,Roli)
values ('Rinor','Biqku','M','1248210261','+383586386783','r.biqku342@gmail.com','stakallxoj123',1,1,1,20,'2020/04/11',1)

insert into PushimetMarrura (Users,Pushimi,Ditet,Viti) values (1,1,3,'2021/05/14');






create proc shtoPushimin @id int  as begin update Users set PushimVjetor=PushimVjetor+1 where Id=@id end


exec shtoPushimin  3
select * from Users