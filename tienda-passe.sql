create table prod(
    id integer not null auto_increment primary key,
    codigo varchar(50),
    lnk_img varchar(256),
    imgprod varbinary(max), 
    video_prod_url varchar(256),
    videoprod varbinary(max), 
    nombre varchar (48),
    categoria varchar (100),
    precio integer,
    stock integer,
    descripcion varchar(256)
);

create table usu(
    id integer not null auto_increment primary key, 
    username varchar(100),
    email varchar(100),
    profilepic varbinary(max), 
    nombre varchar(100),
    apellido varchar(100), 
    fechaNac varchar(100), 
    telefono numeric(20,0),
    direccion varchar(100),
    pais varchar(100), 
    categoria varchar(100)
);

create table ventas(
    id integer not null auto_increment primary key, 
    entregado varchar(20),
    usuario varchar(100), 
    nombre varchar(100),
    telefono numeric(20,0),
    direccion varchar(100),
    pais varchar(100), 
    productos integer, 
    fechapedido integer, 
    fechaentrega integer, 
    notasenvio varchar(200)
);

create table posts(
    id integer not null auto_increment primary key,
    titulo varchar(200), 
    brevedesc varchar(500),
    descripcion integer
)

create table page(
    id integer not null auto_increment primary key,
    imgfile varbinary(max), 
    imgsrc varchar(500),
    imglink varchar(500),
    abouttxt integer,
    whatsappnumber numeric(20,0),
    mail varchar(500),
    facebook varchar(500),
    instagram varchar(500)
)