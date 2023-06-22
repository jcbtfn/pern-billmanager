CREATE DATABASE pernbillmanager;

CREATE TABLE services(
    serviceid SERIAL PRIMARY KEY,
    typeofservice VARCHAR(255) NOT NULL,
    provider VARCHAR(255),
    isfixedamount BOOLEAN
);

CREATE TABLE bills(
    serviceid INTEGER REFERENCES services(serviceid),
    billid SERIAL PRIMARY KEY,
    billdate DATE NOT NULL,
    amount INTEGER
);