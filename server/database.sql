CREATE DATABASE pernbillmanager;

CREATE TABLE services(
    serviceid SERIAL PRIMARY KEY,
    typeofservice VARCHAR(255) NOT NULL,
    provider VARCHAR(255),
    isfixedamount BOOLEAN,
    isactive BOOLEAN
);

CREATE TABLE bills(
    billid SERIAL PRIMARY KEY,
    amount INTEGER,
    billdate DATE NOT NULL,
    ispaid BOOLEAN,
    serviceid INTEGER REFERENCES services(serviceid) NOT NULL
);