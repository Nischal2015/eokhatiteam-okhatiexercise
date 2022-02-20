import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import LinearProgress from "@mui/material/LinearProgress";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import img from "../assets/okhati1.webp";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth-actions";
import CustomLink from "../components/CustomLink";

import {
  MainHeading,
  SubHeading,
  TertiaryHeading,
  Paragraph,
} from "../components/styles";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Img = styled("img")({
  width: "170%",
  opacity: "0.25",
  transform: "translateX(-42%)",
});

const Error = styled("p")({
  color: "red",
  lineHeight: "1.6",
  marginTop: "-1.6rem",
  fontSize: "1.2rem",
  marginBottom: "1.6rem",
});

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const isLogging = useSelector((state) => state.auth.isLogging);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  return (
    <React.Fragment>
      {isLogging && <LinearProgress sx={{ height: ".6rem" }} />}
      <Grid container spacing={0}>
        <Grid item md={8} sx={{ alignSelf: "center", padding: "0 7.5rem" }}>
          <MainHeading>Login</MainHeading>
          <SubHeading>Some sub Heading</SubHeading>
          <Paragraph>
            This text contains the description of the sub heading of the <br />
            page and include about two lines as shown here.
          </Paragraph>
          <form
            onSubmit={handleSubmit((data) => {
              dispatch(
                login(data, () => {
                  navigate(from, { replace: true });
                })
              );
            })}
          >
            <TertiaryHeading htmlFor='email'>Email</TertiaryHeading>
            <OutlinedInput
              size='small'
              id='email'
              name='email'
              sx={{ width: "100%", fontSize: "1.6rem", marginBottom: "2rem" }}
              {...register("email", { required: true })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}

            <TertiaryHeading htmlFor='password'>Password</TertiaryHeading>
            <OutlinedInput
              size='small'
              id='password'
              name='password'
              type={hidePassword ? "password" : "text"}
              sx={{ width: "100%", fontSize: "1.6rem", marginBottom: "2rem" }}
              {...register("password", { required: true })}
            />
            {errors.password && <Error>{errors.password.message}</Error>}

            <Grid container spacing={0.5} sx={{ alignItems: "center" }} mb={4}>
              <Grid item>
                <Checkbox
                  id='showpassword'
                  size='large'
                  sx={{ padding: "0", display: "inline-block" }}
                  onClick={() => setHidePassword((prevValue) => !prevValue)}
                />
              </Grid>
              <Grid item>
                <Typography
                  component='label'
                  htmlFor='showpassword'
                  sx={{
                    display: "inline-block",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                  }}
                >
                  Show Password
                </Typography>
              </Grid>
            </Grid>
            <Button
              type='submit'
              variant='contained'
              size='large'
              sx={{ fontSize: "1.4rem", width: "100%", marginBottom: "1.6rem" }}
            >
              Login
            </Button>
          </form>
          <TertiaryHeading>
            Don't have an account? <CustomLink to='/signup'>Signup</CustomLink>
          </TertiaryHeading>
        </Grid>
        <Grid
          item
          md={4}
          sx={{
            background: "var(--color-primary)",
            overflowX: "hidden",
            padding: "8rem 0 20rem 0",
          }}
        >
          <Img src={img} alt='Doctor and nurse' />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
