\echo 'Delete and recreate object echo  db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE objectEcho;
CREATE DATABASE objectEcho;
\connect objectEcho;

\i oe-schema.sql