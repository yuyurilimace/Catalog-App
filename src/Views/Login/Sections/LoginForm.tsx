import { Checkbox, FormControlLabel, Grid, Link, Button } from "@mui/material";
import { FormInput } from "../../../Components/FormInput";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { baseURL } from "../../../axios";
import { useContext } from "react";
import { AuthContext } from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (form: LoginForm) => {
      const response = await baseURL.post("/login", form);
      return response.data;
    },
  });

  const { control, handleSubmit } = useForm<LoginForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: LoginForm) => {
    mutation.mutate(data, {
      onSuccess: ({ token, isAuth }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", isAuth);
        auth?.setUserToken(token);
        navigate("/home");
      },
    });
  };

  return (
    <Grid
      size={12}
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      textAlign={"center"}
      gap={3}
    >
      <FormInput
        control={control}
        name={"email"}
        fullWidth
        label="Email"
        variant="outlined"
        rules={{
          required: { value: true, message: "Campo E-mail Vazio" },
          min: { value: 1, message: "Campo E-mail vazio" },
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "E-mail inválido",
          },
        }}
      />
      <FormInput
        fullWidth
        control={control}
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        rules={{
          required: "Campo senha vazio",
          minLength: {
            value: 6,
            message: "Senha deve conter pelo menos 6 caracteres",
          },
          pattern: {
            value:
              /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`])(?=.{6,}).*$/,
            message:
              "Senha deve conter pelo menos 6 caracteres uma letra maiscula e um caracter especial",
          },
        }}
      />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Grid size={{ xl: 6, md: 6, sm: 6, xs: 12 }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
        </Grid>
        <Grid size={{ xl: 6, md: 6, sm: 6, xs: 12 }}>
          <Link href="#"> Forgot password? </Link>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">
        Login
      </Button>
      <Link href="#"> Register </Link>
    </Grid>
  );
};

export { LoginForm };
