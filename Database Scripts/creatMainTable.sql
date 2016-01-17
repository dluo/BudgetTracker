
/* Query executed on January 17, 2016 at 3:08:39 AM */
create table Main(
	entryID	   Int IDENTITY(1,1) Unique,
	userID   Int NOT NULL,
	date 	   date NOT NULL,
    amtSpent  Float NOT NULL,
    description VARCHAR(255) NOT NULL,
	PRIMARY KEY(userID)
	
)