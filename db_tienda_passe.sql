--
-- uso: entrar como root a mysql y crear la database con:
-- create database db_tienda_passe;
--  
-- en caso de no querer usar la aplicacion como root,
-- dar permisos a algun usuario del sistema sobre la BD:
-- grant all on db_tienda_passe.* to username identified by 'password';
--
-- luego salir y ejecutar: 
-- mysql -u username -p < db.sql
-- para  crear la BD
--

create table prod (
    id integer not null auto_increment primary key,
    lnk_img varchar(256),
    nombre varchar (48),
    precio integer,
    cantidad integer,
    descripcion varchar(256)
);

create table usrs (
    usr varchar(8),
    pass varchar(8),
    admin varchar(1),
    id integer primary key auto_increment not null
);


INSERT INTO `usrs` (`usr`, `pass`, `admin`) VALUES
('usr1', 'pass', 'f'),
('usr2','pass', 'f'),
('admin1', 'pass', 'v');