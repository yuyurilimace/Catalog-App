import { Button, Box, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";

import { useContext } from "react";
import { AuthContext } from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { FormInput } from "../../../Components/FormInput";

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { appAuth } from "../../../utils/firebse";

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  // const mutation = useMutation({
  //   mutationFn: async ({ email, password }: LoginForm) => {
  //     const response = await signInWithEmailAndPassword(
  //       appAuth,
  //       email,
  //       password
  //     );
  //     const token = await response.user.getIdToken();
  //     console.log(response);
  //     return { token: token };
  //   },
  // });

  const { control, handleSubmit } = useForm<LoginForm>({
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: LoginForm) => {
    localStorage.setItem("token", "tokenTeste");
    localStorage.setItem("isAuth", "true");
    auth?.setUserToken("teste");
    console.log(data);
    navigate("/dashboard");
    // await mutation.mutate(data, {
    //   onSuccess: ({ token }) => {
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("isAuth", "true");
    //     auth?.setUserToken(token);
    //     navigate("/home");
    //   },
    //   onError: (err) => console.log(err),
    // });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      textAlign={"center"}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        control={control}
        name="email"
        sx={{ marginBottom: 4 }}
        label="E-mail"
      />
      <FormInput
        control={control}
        name="password"
        sx={{ marginBottom: 4 }}
        label="Senha"
      />
      <Button
        type="submit"
        sx={{
          background: (theme) =>
            `linear-gradient(to right,${theme.palette.blue?.[500]},${theme.palette.cyan?.[500]})`,
          textTransform: "none",
          ":hover": {
            background: (theme) =>
              `linear-gradient(to right,${theme.palette.blue?.[700]},${theme.palette.cyan?.[700]})`,
          },
        }}
        variant="contained"
      >
        {" "}
        Entrar{" "}
      </Button>
      <Typography marginTop={5} color="#4a5565" variant="subtitle1">
        Use qualquer e-mail e senha para acessar
      </Typography>
    </Box>
  );
};

export { LoginForm };
