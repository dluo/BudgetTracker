/* Query executed on January 17, 2016 at 3:04:40 AM */
create table Budget(
	userID					Int Unique,
	budgetTimeFrameType   VARCHAR(1),
	budgetStartDate 		date,
	budgetEndDate			date,
	budgetValue    		Float,
	PRIMARY KEY(userID)
)