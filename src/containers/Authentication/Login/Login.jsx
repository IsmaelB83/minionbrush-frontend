// NPM Modules
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// Material UI
// Own components
import Authentication from "../../../components/forms/Authentication";
// Models
// Own modules
// Assets

// Login
export default function Login(props) {
    
    // Translate
    const { t } = useTranslation();
    // Props destructuring
    const { activateAccount, enqueueSnackbar } = props;
    const { token } = props.match.params;
    
    // Dispatch activate account
    useEffect(() => {
        if (token) {
            activateAccount(token)
            .then(result => enqueueSnackbar(t("Account activated successfully"), { variant: "success", }))
            .catch(error => enqueueSnackbar(error, { variant: "error", }))
        }
    }, [token, activateAccount, enqueueSnackbar, t]);
    
    // Dispatch login action
    const submitLogin = (inputs) => {
        const { login, password } = inputs;
        props.login(login, password)
        .then(res => enqueueSnackbar(t("Redirecting home..."), { variant: "info" }))
        .catch(error => enqueueSnackbar(error, { variant: "error", }));
    }
    
    // Render
    return (
        <Authentication 
            form="login"
            isLoading={props.isAuthenticating} 
            onSubmit={submitLogin}
        />
    );
}
