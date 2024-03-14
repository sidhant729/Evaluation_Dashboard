const express = require('express');
const server = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const StudentInfoModel = require('./Model/StudentInfoModel')
const cors = require('cors');
const StudentInfoRouter = require('./Routes/StudentInfoRouter');

// Load environment variables
dotenv.config();

// Middleware
server.use(express.json());
server.use(cors()); // You might need to configure CORS options
server.use(bodyParser.urlencoded({ extended: false }));

// Routes
server.use("/students", StudentInfoRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB successfully');
            // Start the server after successful MongoDB connection
            server.listen(5000, () => {
                console.log("Server started on port 5000");
            });
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB', error);
        });


        // dotenv.config()
        
        // connectDB()
        
        // const importData=async ()=>{
        //     try{
        //       await Order.deleteMany()
        //       await Product.deleteMany()
        //       await User.deleteMany()
        
        //       const  createUser=await  StudentInfoModel.insertMany(studentsData)
        //       const adminUser=createUser[0]._id
        //       console.log(adminUser);
        //       const sampleProducts=products.map(product=>{
        //         return {...product,user:adminUser}
        //       })
               
        //       await Product.insertMany(sampleProducts)
        //       console.log('---------- Data imported -------------')
        //       process.exit()
        //     }catch(err){
        //         // console.log(` error is : ${err}`)
        //         console.log(err)
        //         throw err
        //         process.exit(1)
        
        //     }
        // }
        
        const destroyData=async ()=>{
          try{
            // await Order.deleteMany()
            // await Product.deleteMany()
            // await User.deleteMany()
            await StudentInfoModel.deleteMany();
            console.log('Data destroyed ---------  --- -- -- -')
            process.exit()
          }catch(err){
              console.log(err)
              process.exit(1)
        
          }
        }
        if(process.argv[2]==='-d'){
          destroyData()
        }else{
        //   importData()
        }