/* Query executed on January 17, 2016 at 3:08:39 AM */
create table Credentials(
	userID		Int 			IDENTITY(1,1) Unique ,
	userName  VARCHAR(20) 	Unique NOT NULL,
	Password	VARCHAR(20) NOT NULL,
	PRIMARY KEY(userID)
	
)