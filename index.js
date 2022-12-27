import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

/* Port Arguments */
if (process.argv.length !== 3) {
	console.log(">:(\nUsage: index.js portNumber");
	process.exit(1);
}
else {
	var portNumber = process.argv[2];
}

/* Basic Setup */
const __dirname = path.resolve(path.dirname(''));
dotenv.config({ path: path.resolve(__dirname, '.env') });
const userName = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const databaseAndCollection = { db: process.env.MONGO_DB_NAME, user_collection: process.env.MONGO_COLLECTION_USERS, matches_collection: process.env.MONGO_COLLECTION_MATCHES };
const uri = `mongodb+srv://${userName}:${password}@cluster0.l9m35rn.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const users = mongoclient.db(databaseAndCollection.db).collection(databaseAndCollection.user_collection);
const matches = mongoclient.db(databaseAndCollection.db).collection(databaseAndCollection.matches_collection);
const P = new Pokedex();

let loggedin = false;
let username = null;
let profileType = null;
