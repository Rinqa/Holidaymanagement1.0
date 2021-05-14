use ELeaving


insert into KategoriaPushimit values('Dite Feste')
insert into KategoriaPushimit values('Dite e lire')
insert into KategoriaPushimit values('Mbyllje e kompanise')

insert into Pushimet (Pushimi,Kategoria) values ('Vjetor',2)


insert into statusiPuntorit values ('Full Time')
insert into statusiPuntorit values ('Part Time')
insert into statusiPuntorit values ('Contract')

insert into Pozita values ('Full Stack') 
insert into Pozita values ('Back End') 
insert into Pozita values ('Front End')
insert into Pozita values ('Intern')
insert into Pozita values ('Administrat')

insert into Kompania values ('Core Labs')

insert into Departamenti (Departamenti,Kompania) values ('IT',1)
insert into Departamenti (Departamenti,Kompania) values ('Administation',1)

insert into Roli values ('Staf')
insert into Roli values ('Punetor')

insert into Users (Emri,Mbiemri,Gjinia,NrPersonal,Tel,Email,Passwordi,Statusi,Pozita,Departamenti,PushimVjetor,Viti,Roli) 
values  ('Dion','Rama','M','1173280005','+38348666256','dionrama1319@gmail.com','Kakikaki123',1,3,1,20,'2020/04/01',2)


insert into PushimetMarrura (Users,Pushimi,Ditet,Viti) values (1,1,5,'2021/05/14')

insert into FestatZyrtare (Festa,Dita) values ('Bajram','2021/05/13')

insert into Aplikimet (Users,Pushimi,DataFillimit,DataMbarimit,Pershkrimi) values (1,1,'2021/05/20','2021/05/25','Kame nevoj me i qlodh ment')



