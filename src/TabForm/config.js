import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

export const tabs = [
  {
    name: "Profile",
    component: Profile,
    validate: (data, setErrors) => {
      const errors = {};
      if (!data.name || data.name.length < 2) {
        errors["name"] = "Name must be atleast 2 characters";
      }
      if (!data.age || data.age < 18) {
        errors["age"] = "age must be above 18";
      }
      if (!data.email || data.name.email < 2) {
        errors["email"] = "enter valid email";
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    },
  },
  {
    name: "Interests",
    component: Interests,
    validate: (data, setErrors) => {
      const errors = {};
      if (!data.interests || data.interests.length < 2) {
        errors["interests"] = "atleast 2 interests must be selected";
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    },
  },
  {
    name: "Settings",
    component: Settings,
    validate: (data, setErrors) => {
      return true;
    },
  },
];
