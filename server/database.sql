CREATE DATABASE pernbillmanager;

CREATE TABLE servicetype(
    serviceid SERIAL PRIMARY KEY,
    typeofservice VARCHAR(255),
    provider VARCHAR(255)
);

CREATE TABLE billperiod(
    billperiodid SERIAL PRIMARY KEY,
    billid VARCHAR(255),
    startdate DATE,
    enddate DATE,
    totalamount INTEGER
);

CREATE TABLE billamount(
    costid SERIAL PRIMARY KEY,
    serviceid INTEGER REFERENCES servicetype(serviceid),
    periodid INTEGER REFERENCES billperiod(billperiodid), 
    amount INTEGER
);