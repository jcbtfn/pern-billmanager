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

INSERT INTO services (typeofservice, provider) VALUES ('Council Tax', 'London Borough of Waltham Forest');
INSERT INTO services (typeofservice, provider) VALUES ('Water', 'Thames Water');
INSERT INTO services (typeofservice, provider) VALUES ('Energy', 'Octopus');
INSERT INTO services (typeofservice, provider) VALUES ('Gas', 'Scottish Power');

INSERT INTO bills (amount, billdate, serviceid) VALUES (5, '01/01/2023', 1);

UPDATE bills SET amount = 10, billdate = '02/02/2023', serviceid = 2 WHERE billid = 5;
UPDATE bills SET amount = '50', billdate = '03/03/2023', serviceid = '4' WHERE billid = 5;
