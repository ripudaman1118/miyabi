const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const AppSetting=require('./db/AppSetting');
const createCourse=require("./db/CreateCourse");
const CreateRule =require("./db/Createrule");
const CreateGreatExtension=require("./db/CreateGreatExtension");
const CreateMarathon=require("./db/CreateMarathon");
const FAQTag=require("./db/FAQTag");
const FAQ=require("./db/FAQ");
const CreateCategory=require("./db/CreateCategory");
const CreateGxCourse=require("./db/CreateGxCourse");
const CreateCoupon=require("./db/CreateCoupon");
const CreateExercise=require("./db/CreateExercise");
const ManageExtention=require("./db/ManageExtention");
const NewUser=require("./db/SignUp");

const app = express();
app.use(express.json());
app.use(cors());
// --------------------------------------------------create_user------------------------------------------------------------------
app.post("/create_user", async (req, resp) => {

    const user = new User(req.body);
    let result = await user.save();
    resp.send(result);
});
app.get("/users", async (req, resp) => {
    const users = await User.find();
    if(users.length>0){
        resp.send(users);
    }
    else{
       resp.send({result:"user not found"});
    }
});

// ----------------------------------------App setting------------------------------------------------------------------------
app.post("/create_appsetting", async (req, resp) => {

    const appsetting = new AppSetting(req.body);
    let result = await appsetting.save();
    resp.send(result);
});
app.get("/appsettings", async (req, resp) => {
    const res = await AppSetting.find();
    if(res.length>0){
        resp.send(res);
    }
    else{
       resp.send({result:"Product not found"});
    }
});

// --------------------------------------------create course=======================================================================
app.post("/create_course", async (req, resp) => {

    const course = new createCourse(req.body);
    let result = await course.save();
    resp.send(result);
});
app.get("/createourses", async (req, resp) => {
    const createours = await createCourse.find();
    if(createours.length>0){
        resp.send(createours);
    }
    else{
       resp.send({result:"user not found"});
    }
});

// ===================================================Create Rule==========================================================================
app.post("/create_rule", async (req, resp) => {

    const rule = new CreateRule(req.body);
    let result = await rule.save();
    resp.send(result);
});
app.get("/createrules", async (req, resp) => {
    const rule = await CreateRule.find();
    if(rule.length>0){
        resp.send(rule);
    }
    else{
       resp.send({result:"user not found"});
    }
});


// ================================================================CreateGreatExtension===============================================================
app.post("/create_great_extension", async (req, resp) => {

    const Extension = new CreateGreatExtension(req.body);
    let result = await Extension.save();
    resp.send(result);
});
app.get("/creategreatextensions", async (req, resp) => {
    const Extension = await CreateGreatExtension.find();
    if(Extension.length>0){
        resp.send(Extension);
    }
    else{
       resp.send({result:"user not found"});
    }
});

//=======================================================createmarathons=============================================================
app.post("/create_marathon", async (req, resp) => {

    const marathon = new CreateMarathon(req.body);
    let result = await marathon.save();
    resp.send(result);
});
app.get("/createmarathons", async (req, resp) => {
    const marathon = await CreateMarathon.find();
    if(marathon.length>0){
        resp.send(marathon);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================FAQ=============================================================
app.post("/create_faq-que-ans", async (req, resp) => {

    const faqs = new FAQ(req.body);
    let result = await faqs.save();
    resp.send(result);
});
app.get("/faqs", async (req, resp) => {
    const faqss = await FAQ.find();

    if(faqss.length>0){
        resp.send(faqss);
    }
    else{
       resp.send({result:"user not found"});
    }
});



//=======================================================FAQTag=============================================================
app.post("/create_faqtag", async (req, resp) => {

    const FAQTags = new FAQTag(req.body);
    let result = await FAQTags.save();
    resp.send(result);
});
app.get("/faqtags", async (req, resp) => {
    const FAQTags = await FAQTag.find();
    if(FAQTags.length>0){
        resp.send(FAQTags);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================create categorys=============================================================
app.post("/create_category", async (req, resp) => {

    const createcategory = new CreateCategory(req.body);
    let result = await createcategory.save();
    resp.send(result);
});
app.get("/createcategorys", async (req, resp) => {
    const createcategory = await CreateCategory.find();
    if(createcategory.length>0){
        resp.send(createcategory);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================create gx courses=============================================================
app.post("/create_gx_course", async (req, resp) => {

    const creategxcourse = new CreateGxCourse(req.body);
    let result = await creategxcourse.save();
    resp.send(result);
});
app.get("/creategxcourses", async (req, resp) => {
    const creategxcourse= await CreateGxCourse.find();
    if(creategxcourse.length>0){
        resp.send(creategxcourse);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================create Coupon=============================================================
app.post("/create_coupon", async (req, resp) => {

    const Coupon = new CreateCoupon(req.body);
    let result = await Coupon.save();
    resp.send(result);
});
app.get("/createcoupons", async (req, resp) => {
    const Coupon= await CreateCoupon.find();
    if(Coupon.length>0){
        resp.send(Coupon);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================Create Exercise=============================================================
app.post("/create_exercise", async (req, resp) => {

    const Exercise = new CreateExercise(req.body);
    let result = await Exercise.save();
    resp.send(result);
});
app.get("/createexercises", async (req, resp) => {
    const Exercise= await CreateExercise.find();
    if(Exercise.length>0){
        resp.send(Exercise);
    }
    else{
       resp.send({result:"user not found"});
    }
});
//=======================================================Manage Extention=============================================================
app.post("/create_manage_extention", async (req, resp) => {

    const Extention = new ManageExtention(req.body);
    let result = await Extention.save();
    resp.send(result);
});
app.get("/manageextentions", async (req, resp) => {
    const Extention= await ManageExtention.find();
    if(Extention.length>0){
        resp.send(Extention);
    }
    else{
       resp.send({result:"user not found"});
    }
});
// =======================================================Sign up========================================================================
app.post("/signup", async (req, resp) => {
    const newuser = new NewUser(req.body);
    let result = await newuser.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
});
//==============================================================login=======================================================================
app.post("/login", async (req, resp) => {
    let newuser = await NewUser.findOne(req.body).select("-password");
    if (req.body.email && req.body.password) {
        if (newuser) {
            resp.send(newuser)
        }
        else {
            resp.send({ result: "No user found" });
        }
    }
    else {
        resp.send({ result: "No user found" });
    }
});
app.listen(5000); 