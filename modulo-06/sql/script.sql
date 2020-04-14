CREATE TABLE "Category" (
  "Category_Id" SERIAL PRIMARY KEY,
  "Category_Name" text not null
);

CREATE TABLE "Product" (
  "Product_Id" SERIAL PRIMARY KEY,
  "Product_Name" text not null,
  "Product_Description" text not null,
  "Product_OldPrice" int,
  "Product_Price" int not null,
  "Product_Quantity" int DEFAULT 0,
  "Product_Status" int DEFAULT 1,
  "Product_Created_At" timestamp DEFAULT (now()),
  "Product_Updated_At" timestamp DEFAULT (now()),
  "Category_Id" int,
  "User_Id" int
);

CREATE TABLE "File" (
  "File_Id" SERIAL PRIMARY KEY,
  "File_Name" text not null,
  "File_Path" text not null,
  "Product_Id" int
);

ALTER TABLE "Product" ADD FOREIGN KEY ("Category_Id") REFERENCES "Category" ("Category_Id");

ALTER TABLE "File" ADD FOREIGN KEY ("Product_Id") REFERENCES "Product" ("Product_Id");
