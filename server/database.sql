CREATE DATABASE pernbillmanager;

CREATE TABLE services(
    serviceid SERIAL PRIMARY KEY,
    typeofservice VARCHAR(255) NOT NULL,
    provider VARCHAR(255),
    isfixedamount BOOLEAN DEFAULT FALSE,
    isactive BOOLEAN DEFAULT TRUE
);

CREATE TABLE bills(
    billid SERIAL PRIMARY KEY,
    amount NUMERIC,
    billdate DATE NOT NULL,
    ispaid BOOLEAN DEFAULT FALSE,
    serviceid INTEGER REFERENCES services(serviceid) NOT NULL
);