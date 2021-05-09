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
	Email varchar(255),
	Passwordi varchar(255),
);
create table Departamenti(
	Id int identity(1,1) primary key,
	Departamenti varchar(255),
	Kompania int references Kompania(Id),
);
create table PushimetMarrura(
	Puntori int references Puntori(Id),
	Pushimi int references Pushimet(Id),
	Ditet int,
	Viti date,

);
create table Puntori(
	Id int identity(1,1) primary key,
	Emri varchar(255),
	Mbimeri varchar(255),
	Gjinia char(1),
	NrPersonal int,
	Tel varchar(30),
	Email varchar(255),
	Passwordi varchar(32),
	Statusi int references statusiPuntorit(Id),
	Pozita int references Pozita(Id),
	Departamenti int references Departamenti(Id),
	PushimVjetor int,
	DataFillimit date, --dataFillimit ne kompani
);
