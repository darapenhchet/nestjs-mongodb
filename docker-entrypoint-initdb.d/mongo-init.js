db = db.getSiblingDB('activity_feeds_db');

db.createCollection('activity_feeds_collection');

db.sample_collection.insertMany([
 {
    org: 'helpdev',
    filter: 'EVENT_A',
    addrs: 'http://rest_client_1:8080/wh'
  },
  {
    org: 'helpdev',
    filter: 'EVENT_B',
    addrs: 'http://rest_client_2:8081/wh'
  },
  {
    org: 'github',
    filter: 'EVENT_C',
    addrs: 'http://rest_client_3:8082/wh'
  }  
]);

db.createUser(
    {
        user: "admin",
        pwd: "adminpassword",
        roles: [
            {
                role: "readWrite",
                db: "activity_feeds_db"
            }
        ]
    }
);