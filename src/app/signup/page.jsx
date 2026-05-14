"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())

    const { data, error } = await authClient.signUp.email({
      name: user.name, // required
      email: user.email, // required
      password: user.password, // required
      image: user.image,
    });

    if(data){
        toast.success("Sign Up successful, Welcome to Wanderlust")
        redirect('/')
    }
    if(error){
        toast.error(error.message)
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center py-5">
        <h1 className="text-3xl">Create Account</h1>
        <p>Start your adventure with Wanderlust</p>
      </div>
      <Card className="w-96 mx-auto border rounded-none">
        <Form className="flex  flex-col gap-4 " onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="Enter Your FullName" />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Image Url</Label>
            <Input placeholder="Enter Your Image URL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div>
            <Button type="submit" className={"w-full rounded-none bg-cyan-500"}>
              Create Account
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;
