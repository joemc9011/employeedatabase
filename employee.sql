create database departmentsdb;

use departmentsdb;

create table dept (
id integer not null auto_increment,
dept_name varchar (30) not null,
primary key (id)
);

create database rolesdb;

use rolesdb;

create table role(
id integer not null auto_increment,
title varchar(30) not null,
salary decimal (10,2) not null,
department_id integer not null,
primary key (id)
);

create database employeedb;

use employeedb;

create table staff (
id integer not null auto_increment,
first_name varchar (30) not null,
last_name varchar (30) not null,
role_id integer not null,
primary key (id)
);


