CREATE TABLE Instructor(
	Id         SERIAL PRIMARY KEY,
	Avatar_Url TEXT                        NULL,
	Name       VARCHAR(255)                NULL,
	Birth      TIMESTAMP WITHOUT TIME ZONE NULL,
	Gender     TEXT                        NULL,
	Services   TEXT                        NULL,
	Created_At  TIMESTAMP WITHOUT TIME ZONE NULL
)

CREATE TABLE Member(
	Id            SERIAL PRIMARY KEY,
	Avatar_Url    TEXT                        NULL,
	Name          VARCHAR(255)                NULL,
	Email         TEXT                        NULL,
	Birth         TIMESTAMP WITHOUT TIME ZONE NULL,
	Gender        TEXT                        NULL,
	Blood         TEXT                        NULL,
	Weight        INTEGER                     NULL,
	Height        INTEGER                     NULL,
	Instructor_Id INTEGER                     NULL
)
