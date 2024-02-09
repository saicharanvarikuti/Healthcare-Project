CREATE database IF NOT exists healthcare;
USE healthcare;

select * from users;
select * from partners;
select * from doctors;
select * from BOOKINGS;
select * from ENQUIRY;
select * from THERAPIES;
select * from NURSE_SERVICES;

-- UPDATE NURSE_SERVICES SET PARTNER_ID = 20 WHERE NURSE_SERVICE_ID = 6;
-- select * from therapies;
-- select * from invoice;
-- select * from nurse_services;
-- select * from admins;
-- ALTER TABLE PARTNERS
-- ADD COLUMN STATUS VARCHAR(255) AFTER SERVICE_TYPE;
-- INSERT INTO ADMINS VALUES('1','admin1 first name','admin1 second name','admin1@gmail.com','admin1@123','admin');
-- ALTER TABLE USERS
-- MODIFY COLUMN STATUS VARCHAR(255) NOT NULL;
-- MODIFY COLUMN GENDER varchar(255) DEFAULT NULL;
select * from doctors;
UPDATE doctors SET IMAGE_URL = 'https://whistlershealthcare.s3.ap-south-1.amazonaws.com/images/Sarah.jpg' WHERE DOCTOR_ID = 6;

CREATE TABLE IF NOT EXISTS USERS(
	USER_ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME varchar(255) NOT NULL,
    LAST_NAME varchar(255) NOT NULL,
    EMAILID varchar(255) NOT null,
    PASSWORD VARCHAR(255) NOT NULL,
    STATUS VARCHAR(255) NOT NULL DEFAULT 'ACTIVE');


CREATE TABLE IF NOT EXISTS PARTNERS(
	PARTNER_ID INT AUTO_INCREMENT PRIMARY KEY,
    PARTNER_NAME varchar(255) NOT NULL,
    EMAILID varchar(255) NOT null,
    PASSWORD VARCHAR(255) NOT NULL,
    SERVICE_TYPE VARCHAR(255) NOT NULL);
    
CREATE TABLE IF NOT EXISTS ADMINS(
	ADMIN_ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME varchar(255) NOT NULL,
    LAST_NAME varchar(255) NOT NULL,
    EMAILID varchar(255) NOT null,
    PASSWORD VARCHAR(255) NOT NULL,
    DESIGNATION VARCHAR(255) NOT NULL);
    
CREATE TABLE IF NOT EXISTS DOCTORS(
	DOCTOR_ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME varchar(255) NOT NULL,
    LAST_NAME varchar(255) NOT NULL,
    IMAGE_URL VARCHAR(255),
    SPECIALIZATION VARCHAR(255) NOT NULL,
    LOCATION VARCHAR(255) NOT NULL,
    FEE VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) references PARTNERS(PARTNER_ID));
    
CREATE TABLE IF NOT EXISTS THERAPIES(
	THERAPY_ID INT AUTO_INCREMENT PRIMARY KEY,
    THERAPY_NAME varchar(255) NOT NULL,
    DESCRIPTION varchar(255) NOT NULL,
    IMAGE_URL VARCHAR(255),
    LOCATION VARCHAR(255) NOT NULL,
    FEE VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) references PARTNERS(PARTNER_ID));
    
CREATE TABLE IF NOT EXISTS NURSE_SERVICES(
	NURSE_SERVICE_ID INT AUTO_INCREMENT PRIMARY KEY,
    NURSE_SERVICE_NAME varchar(255) NOT NULL,
    DESCRIPTION varchar(255) NOT NULL,
    IMAGE_URL VARCHAR(255),
    LOCATION VARCHAR(255) NOT NULL,
    FEE VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) references PARTNERS(PARTNER_ID));

CREATE TABLE IF NOT EXISTS BOOKINGS (
    BOOKING_ID INT AUTO_INCREMENT PRIMARY KEY,
    PATIENT_NAME VARCHAR(255) NOT NULL,
    GENDER ENUM('Male', 'Female', 'Other') NOT NULL,
    DOB DATE NOT NULL,
    WEIGHT INT NOT NULL,
    ADDRESS VARCHAR(255) NOT NULL,
    MOBILE_NUMBER VARCHAR(255) NOT NULL,
    APPOINTMENT_DATE DATE NOT NULL,
    AILMENT_DESCRIPTION VARCHAR(255) NOT NULL,
    BOOKING_DATE DATE NOT NULL,
    BOOKING_STATUS VARCHAR(255) NOT NULL,
    BOOKING_TYPE VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) REFERENCES PARTNERS(PARTNER_ID),
    USER_ID INT,
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID)
);

CREATE TABLE IF NOT EXISTS FEEDBACKS(
	FEEDBACK_ID INT AUTO_INCREMENT PRIMARY KEY,
    BOOKING_ID INT,
    FOREIGN KEY (BOOKING_ID) REFERENCES BOOKINGS(BOOKING_ID),
    USER_ID INT,
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID),
    FEEDBACK VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) REFERENCES PARTNERS(PARTNER_ID));
    
CREATE TABLE IF NOT EXISTS INVOICE (
    INVOICE_ID INT AUTO_INCREMENT PRIMARY KEY,
    BOOKING_ID INT,
    FOREIGN KEY (BOOKING_ID) REFERENCES BOOKINGS(BOOKING_ID),
    USER_ID INT,
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID),
    AMOUNT DECIMAL(10, 2) NOT NULL,
    ISSUE_DATE DATE NOT NULL,
    DUE_DATE DATE NOT NULL,
    STATUS VARCHAR(255) NOT NULL,
    PARTNER_ID INT,
    FOREIGN KEY (PARTNER_ID) REFERENCES PARTNERS(PARTNER_ID)
);

CREATE TABLE IF NOT EXISTS ENQUIRY (
    ENQUIRY_ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
    EMAILID varchar(255) NOT null,
    PHONE_NUM VARCHAR(255) NOT NULL,
    MESSAGE VARCHAR(255) NOT NULL
);

    
    
    