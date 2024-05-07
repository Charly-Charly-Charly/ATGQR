<<<<<<< HEAD
import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {PORT } from "./config.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { pool } from "./db.js";

const salt=10;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

app.use(cookieParser());

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.post('/register', (req, res) => { 
  const sql = "INSERT INTO users (`name`,`password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    if(err) return res.json({error:"error for hassing passsword"});
    const values=[   req.body.user,
      hash
    ]
    pool.query(sql,[values], (err,result)=>{
    if(err) return res.json({error:"Inserting data error in server"});
    return res.json({Status:"Success"});
   })
  })
})

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE name =?';
  pool.query(sql, [req.body.name], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const user = result[0];
    bcrypt.compare(req.body.password.toString(), user.password, (err, result) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      if (result) {
        const token = jwt.sign({ name: user.name }, 'jwt-secretkey', { expiresIn: '1d' });
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict'
        });
        return res.status(200).json({ message: 'Authenticated successfully' });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
});

function insertQRCodes(url, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      const qrCodeUrl = `${url}-${i+1}`;
      connection.query('INSERT INTO qr_codes SET ?', { url: qrCodeUrl }, (err, res) => {
        if (err) throw err;
        console.log(`Inserted QR code with URL: ${qrCodeUrl}`);
      });
    }
  }
  
  insertQRCodes();

app.listen(PORT);
=======
import express from "express";
import cors from "cors";
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import {PORT } from "./config.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { pool } from "./db.js";

const salt=10;

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname)

app.use(cookieParser());

app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname, '../client/dist')))

app.post('/register', (req, res) => { 
  const sql = "INSERT INTO users (`name`,`password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
    if(err) return res.json({error:"error for hassing passsword"});
    const values=[   req.body.user,
      hash
    ]
    pool.query(sql,[values], (err,result)=>{
    if(err) return res.json({error:"Inserting data error in server"});
    return res.json({Status:"Success"});
   })
  })
})

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE name =?';
  pool.query(sql, [req.body.name], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const user = result[0];
    bcrypt.compare(req.body.password.toString(), user.password, (err, result) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      if (result) {
        const token = jwt.sign({ name: user.name }, 'jwt-secretkey', { expiresIn: '1d' });
        res.cookie('token', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict'
        });
        return res.status(200).json({ message: 'Authenticated successfully' });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    });
  });
});

function insertQRCodes(url, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      const qrCodeUrl = `${url}-${i+1}`;
      connection.query('INSERT INTO qr_codes SET ?', { url: qrCodeUrl }, (err, res) => {
        if (err) throw err;
        console.log(`Inserted QR code with URL: ${qrCodeUrl}`);
      });
    }
  }
  
  insertQRCodes();

app.listen(PORT);
>>>>>>> f7a04601cc38a944cb48c150d55977dc60d138f7
console.log(`Server is listening on port ${PORT}`);