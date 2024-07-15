wget https://download.geofabrik.de/europe/france/alsace-latest.osm.pbf
wget https://download.geofabrik.de/europe/france/lorraine-latest.osm.pbf
osmium merge alsace-latest.osm.pbf lorraine-latest.osm.pbf -o alsace-lorraine.pbf
osmium extract -b 7.92,48.71,6.70,48.18 alsace-lorraine.pbf -o strasbourg-a-st-die.osm.pbf
docker run -v "$(pwd)/data":/data openmaptiles/planetiler-openmaptiles:latest --force --download --osm-path=strasbourg-a-st-die.osm.pbf --output=strasbourg-a-st-die.pmtiles