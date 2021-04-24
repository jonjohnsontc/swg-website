#!/bin/bash
data="/docker-entrypoint-initdb.d/dump.sql"
dbname=postgres

echo "Restoring db"
pg_restore -U postgres -d postgres --verbose < "$data" || exit 1
