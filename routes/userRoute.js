const express = require("express")

const {register, login, logout, forgotPassword, resetpassword, verifyEmail, getAllTenant, getOneTenant, updateTenant, deleteTenant} = require("../controllers/usersController")
const  {validateReg, validatelogin, validateForgotPassword, validateResetPassword} = require("../middleware/userAthentication")
const {verifyAdmin} = require("../middleware/verifyRoles")

 

const router = express.Router()   
 
  
//register
router.post("/register", register)


router.get("/get-all-tenants", verifyAdmin(['manager', 'owner']), getAllTenant)

router.get("/get-one-tenant/:id", verifyAdmin(['manager', 'owner']), getOneTenant)

router.put("/update-tenant/:id", verifyAdmin(['manager', 'owner']), updateTenant )

router.delete("/delete-tenant/:id", verifyAdmin(['manager', 'owner']), deleteTenant)

//login
router.post("/login", validatelogin, login)

//logout
router.post("/logout", logout)

//forgot password
router.post("/forgotPassword", validateForgotPassword,forgotPassword)

router.get("/reset-password/:resetToken", validateResetPassword, resetpassword)

router.post("/", verifyEmail)

//router.get("/dashboard", loadDashboard)


module.exports = routerverify-email