/* Query executed on January 17, 2016 at 3:04:40 AM */
create table Budget(
	userID					Int Unique,
	budgetTimeFrameType   VARCHAR(1) NOT NULL,
	budgetStartDate 		date NOT NULL,
	budgetEndDate			date NOT NULL,
	budgetValue    		Float NOT NULL,
	PRIMARY KEY(userID)
)