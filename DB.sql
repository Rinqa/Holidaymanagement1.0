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
	Kategoria varchar(255)
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
	Kompania varchar(255),
);

create table PushimetMarrura(
	Users varchar(255),
	Pushimi varchar(255),
	Ditet int,
	Viti date,

);
create table Users(
	Id int identity(1,1) primary key,
	username varchar(50),
	Emri varchar(255),
	Mbiemri varchar(255),
	Gjinia char(1),
	NrPersonal int,
	Tel varchar(30),
	Email varchar(255),
	Password varchar(32),
	Statusi varchar(255),
	Pozita varchar(255),
	Departamenti varchar(255),
	PushimVjetor int,
	Viti date, --dataFillimit ne kompani
	Roli varchar(100),
	profili varchar(255),
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
	IdUser int,
	Pushimi varchar(255),
	DataFillimit date,
	DataMbarimit date,
	Pershkrimi varchar(500),
);