import * as Yup from "yup";

export const signUpSchema=Yup.object({

    username:Yup.string().min(2).max(25).required("please enter Your Name"),
    email:Yup.string().email().required("please enter Your Email"),
    password:Yup.string().min(6).required("please enter Your password"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password")],"Password must match"),
    userRole:Yup.string().required("User role is must select")
});

export const LogInSchema=Yup.object({
    email:Yup.string().email().required("please enter Your Email"),
    password:Yup.string().min(2).required("please enter Your password")
})


export const EventForm=Yup.object({
    TypeofEvent:Yup.string(),
    Place:Yup.string().max(25),
    DateTimeStartEvent: Yup.number(),
    DateTimeEndEvent: Yup.number(),
    Budget:Yup.number().min(10000).max(200000)
})