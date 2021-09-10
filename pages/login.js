import React from "react";
import { useForm } from "react-hook-form";
import { userLoginDetails, userRoles } from "./constants";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import Header from './header'


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const routeToCorrectJourney = (userRole, userID) => {
    switch (userRole) {
      case userRoles.CR:
        router.push({pathname: "/customer"});
        break;
      case userRoles.HI:
        router.push("/hub");
        break;
      case userRoles.SR:
        router.push("/seller");
        break;

      default:
        break;
    }
  };

  const validateDataAndRetrieveCustomerGroup = (data) => {
    let userRole;
    let userID;
    console.log("userLoginDetails", userLoginDetails);
    userLoginDetails.forEach((item) => {
      if (
        item.phoneNumber === data.phoneNumber &&
        item.password === data.password
      ) {
        userRole = item.userRole;
        userID = item.userID;
        console.log("userRole", userRole);
        console.log("userID", userID);
        routeToCorrectJourney(userRole, userID);
      }
    });
    errors.login = "Failed";
  };

  const onSubmit = (data) => {
    console.log(data);
    validateDataAndRetrieveCustomerGroup(data);
  };

  return (
    <div class={styles.body}>
      <Header />
    <form class={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input class={styles.input}
          {...register("phoneNumber", {
            required: true,
            maxLength: 10,
            minLength: 10,
          })}
          placeholder="Phone Number"
        />
        {errors.phoneNumber && errors.phoneNumber.type === "required" && (
          <p class={styles.p}>Phone number is required.</p>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (
          <p class={styles.p}>Phone number should be 10 digit long.</p>
        )}
        {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
          <p class={styles.p}>Phone number should be 10 digit long.</p>
        )}
        <input class={styles.input}
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <p>Password is required.</p>}
        <input class={styles.input} type="submit" />
    </form>
    </div>
  );
}

export default Login;
