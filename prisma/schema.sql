CREATE TABLE series (
  id serial PRIMARY KEY,
  name VARCHAR(255),
  car_restriction VARCHAR(255),
  length VARCHAR(255),
  type VARCHAR(255),
  image VARCHAR(255)
);

CREATE TABLE races (
  id serial PRIMARY KEY,
  laps INT,
  circuit VARCHAR(255),
  circuit_configuration VARCHAR(255),
  series_id INT REFERENCES series(id),
  image VARCHAR(255)
);
