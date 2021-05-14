create database ELeaving;

use ELeaving
----Fest e lire, Dite Feste, Mbyllje e kompanijes
create table KategoriaPushimit(
	Id int identity(1,1) primary key,
	Kategoria varchar(255)
);
create table Pushimet(
	Id int identity(1,1) primary key,
	Pushimi varchar(255),
	Kategoria int references KategoriaPushimit(Id),
);
create table statusiPuntorit(
	Id int identity(1,1) primary key,
	Statusi varchar(255),
	
);
create table Pozita(
	Id int identity(1,1) primary key,
	Pozita varchar(255)
);
create table Kompania(
	Id int identity(1,1) primary key,
	Emri varchar(255),
);
create table Departamenti(
	Id int identity(1,1) primary key,
	Departamenti varchar(255),
	Kompania int references Kompania(Id),
);
drop table Departamenti
create table PushimetMarrura(
	Users int references Users(Id),
	Pushimi int references Pushimet(Id),
	Ditet int,
	Viti date,

);
create table Users(
	Id int identity(1,1) primary key,
	Emri varchar(255),
	Mbiemri varchar(255),
	Gjinia char(1),
	NrPersonal int,
	Tel varchar(30),
	Email varchar(255),
	Passwordi varchar(32),
	Statusi int references statusiPuntorit(Id),
	Pozita int references Pozita(Id),
	Departamenti int references Departamenti(Id),
	PushimVjetor int,
	Viti date, --dataFillimit ne kompani
	Roli int references Roli(Id),
);
create table Roli(
	Id int identity(1,1) primary key,
	Roli varchar(100)
);
create table FestatZyrtare(
	Id int identity(1,1) primary key,
	Festa varchar(100),
	Dita date,
);


create table Aplikimet(
	Id int primary key identity(1,1),
	Users int references Users(Id),
	Pushimi int references Pushimet(Id),
	DataFillimit date,
	DataMbarimit date,
	Pershkrimi varchar(500),
);