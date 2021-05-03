create database Pushimet

use Pushimet;

create table Kompania(
	Id int identity(1,1) primary key,
	Emri varchar(255),
	DrejtoriEmri varchar(255),
	Email varchar(255),
	Passwordi varchar(36),
	Tel varchar(255)
);
create table departamenti(
	Id int identity(1,1)  primary key,
	DeparatamentiEmri varchar(255),
	KompaniaId int REFERENCES Kompania(Id),
	
);
create table Lokacioni(
	Id int identity(1,1)  primary key,
	Lokacioni varchar(255)
);
create table Ekipi(
	Id int identity(1,1)  primary key,
	EkipiEmri varchar(255),
	LokacioniId int references Lokacioni(Id),
	DepartamentiId int references Departamenti(Id)
);
create table Pozitat(
	Id int identity(1,1)  primary key,
	Pozita varchar(255)
);
create table StatusiPuntorit(
	Id int identity(1,1)  primary key,
	Statusi varchar(255)
);
create table Punetori(
	Id int identity(1,1)  primary key,
	Emri varchar(255),
	Mbiemri varchar(255),
	Gjinia char(1),
	Email varchar(255),
	Passwordi varchar(36),
	NumriPersonal int,
	Lokacioni int references Lokacioni(Id),
	Tel varchar(255),
	Statusi int references StatusiPuntorit(Id),
	Pozita int references Pozitat(Id),
	EkipiId int references Ekipi(Id), 
);
create table Dokumentet(
	Id int identity (1,1)  primary key,
	Punetori int references Punetori(Id),
	Dokumenti varchar(600),
	Pershkrimi varchar(255),
	DataDorezimit date

);
create table Pushimet(
	Id int identity(1,1)  primary key,
	Pushimi varchar(255)
);
create table FestatZyrtare(
	Id int identity(1,1)  primary key,
	Festa varchar(255),
	DataFillimit date,
	DataMbarimit date
);
create table Aplikimet(
	Id int identity(1,1)  primary key,
	Pushimi int references Pushimet(Id),
	Punetori int references Punetori(Id),
	DataFillimit date, 
	Ditet int,
	Ekipi int references Ekipi(Id),
	Pershkrimi varchar(1000),
	Dokument varchar(500),
	Aprovimi bit,
);
create table Ditet(
	Punetori int references Punetori(Id),
	Pushimi int references Pushimet(Id),
	Ditet int
);
