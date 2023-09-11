import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import AdminUser from "./pages/AdminUser";
import AppSettings from "./pages/AppSettings";
import AuditLogs from "./pages/AuditLogs";
import Contest from "./pages/Contest";
import ContestRules from "./pages/ContestRules";
import Coupons from "./pages/Coupons";
import Course from "./pages/Course";
import CreateCoupons from "./pages/CreateCoupons";
import Dashboard from "./pages/Dashboard";
import DayCategory from "./pages/DayCategory";
import Exercise from "./pages/Exercise";
import FAQ from "./pages/FAQ";
import FAQList from "./pages/FAQList";
import FAQTags from "./pages/FAQTags";
import Feedback from "./pages/Feedback";
import GreatExtension from "./pages/GreatExtension";
import GxCourse from "./pages/GxCourse";
import ManageComments from "./pages/ManageComments";
import ManageExtention from "./pages/ManageExtention";
import ManageMarathon from "./pages/ManageMarathon";
import ManageUsers from "./pages/ManageUsers";
import Modules from "./pages/Modules";
import MultiError from "./pages/MultiError";
import MultiLanguage from "./pages/MultiLanguage";
import Notifications from "./pages/Notifications";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Revenue from "./pages/Revenue";
import UserSessionLogs from "./pages/UserSessionLogs";
import UserPrivilege from "./pages/UserPrivilege";
import LogOut from "./pages/LogOut";
import CreateUser from "./components/CreateUser";
import UpdateUserModule from "./components/UpdateUserModule";
import CreateRules from "./components/CreateRules";
import CreateCourse from "./components/CreateCourse";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";
import CreateGreatExtension from "./components/CreateGreatExtension";
import CreateGxCourse from "./components/CreateGxCourse";
import CreateMarathon from "./components/CreateMarathon";
import CreateCategory from "./components/CreateCategory";
import CreateExercise from "./components/CreateExercise";
import AddNewError from "./components/AddNewError";


import Login from "./pages/login";
import SignUp from "./pages/Signup";

const App = () => {
  

  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<AdminUser />} />
          <Route path="/appSettings" element={<AppSettings />} />
          <Route path="/auditLogs" element={<AuditLogs />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/contestRules" element={<ContestRules />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/course" element={<Course />} />
          <Route path="/createCoupons" element={<CreateCoupons />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dayCategory" element={<DayCategory />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/fAQ" element={<FAQ />} />
          <Route path="/fAQList" element={<FAQList />} />
          <Route path="/fAQTags" element={<FAQTags />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/greatExtension" element={<GreatExtension />} />
          <Route path="/gxCourse" element={<GxCourse />} />
          <Route path="/manageComments" element={<ManageComments />} />
          <Route path="/manageExtention" element={<ManageExtention />} />
          <Route path="/manageMarathon" element={<ManageMarathon />} />
          <Route path="/manageUsers" element={<ManageUsers />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/multiError" element={<MultiError />} />
          <Route path="/multiLanguage" element={<MultiLanguage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/userSessionLogs" element={<UserSessionLogs />} />
          <Route path="/userPrivilege" element={<UserPrivilege />} />
          <Route path="/logOut" element={<LogOut />} />

          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/updateUserModule" element={<UpdateUserModule />} />
          <Route path="/createRules" element={<CreateRules />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/addNewError" element={<AddNewError/>} />
          <Route
            path="/createGreatExtension"
            element={<CreateGreatExtension />}
          />
          <Route path="/createGxCourse" element={<CreateGxCourse />} />
          <Route path="/createMarathon" element={<CreateMarathon />} />
          <Route path="/createcategory" element={<CreateCategory />} />
          <Route path="/create_exercise" element={<CreateExercise />} />
        </Routes>

        
      </Navbar>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
