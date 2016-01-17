/* Query executed on January 17, 2016 at 3:08:39 AM */
create table Credentials(
	userID		Int 			Unique,
	userName  VARCHAR(20) 	Unique,
	Password	VARCHAR(20),
	PRIMARY KEY(userID)
	
)