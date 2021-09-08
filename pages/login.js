import React from 'react';
import { useForm } from 'react-hook-form';
import { userLoginDetails, userRoles } from './constants';
import Customer from './customer-journey/customer';
import Seller from './seller-journey/seller';
import HubIncharge from './hub-incharge-journey/hubIncharge';



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const routeToCorrectJourney = (userRole, userID) => {
    switch (userRole) {
      case userRoles.CR:
        return (<Customer />);
      case userRoles.HI:
        return <HubIncharge />
      case userRoles.SR:
        return <Seller />
      default:
        break;
    }
  }

  const validateDataAndRetrieveCustomerGroup = (data) => {
    let userRole;
    let userID;
    userLoginDetails.forEach({} = (item) => {
      if(item.phoneNumber === data.phoneNumber && item.password === data.password){
        userRole = item.userRole;
        userID = item.userID;
        routeToCorrectJourney(userRole, userID);
      }
    })
    errors.login = 'Failed';
  }

  const onSubmit = (data) => {
    console.log(data);
    validateDataAndRetrieveCustomerGroup(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div >
        <input {...register('phoneNumber', { required: true, maxLength: 10, minLength: 10 })} placeholder="Phone Number" />
          {errors.phoneNumber && errors.phoneNumber.type === "required" && <p>Phone number is required.</p>}
          {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && <p>Phone nuber should be 10 digit long.</p> }
          {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <p>Phone nuber should be 10 digit long.</p> }
        <input type="password" {...register('password', { required: true })} placeholder="Password" />
          {errors.password && <p>Password is required.</p>}
        <input type="submit" />
      </div>

      </form>
  );
}
