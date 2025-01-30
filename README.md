# Vehicle-Builder 

## Description 
This application is used to build or select an existing vehicle. Once selected the user can perform certain actions until they exit the application. 

## Instillation 
Clone the reposetory: git clone <reposetory url> 
Navigate to the project directory: cd Vehicle-Builder.
Install the dependencies: npm install. 

## Usage 
Build the project: npm run build. 
Start the application: npm start. 

## Features 
Create a new vehicle (Truck, Car, Motorbike). 
Select an existing vehicle. 
Perform actions on the selected vehicle. 

Print details 
Accelerate 
Decelerate 
Stop vehicle 
Turn right 
Turn left 
Reverse 
Tow a vehicle (Truck Only) 
Perform a wheelie (Motorbike Only)

## Classes 
Car: Represents a car with properties like Vin, color, make, model, year, weight, top speed, and wheels. 
Truck: Represents a truck with additional properties like towing capacity. 
Motorbike: Represents a motorbike with properties liek VIN, color, make, model, year, weight, top speed, and wheels.
Wheel: Represents a wheel with properties like diamater and tire brand. 
Cli: Handels the command-line interface for creating and managing vehicles. 

## Intercfaces 
AbleToTow: Interface for vehicles that can tow other vehicles. 
Drivable: Interface for vehicles that can be driven. 

## Liscense 
MIT. 

## Video Demo
https://drive.google.com/file/d/1hDVm97cxPGtEigR4D8EsxMVVt_T_IM1z/view?usp=sharing 


