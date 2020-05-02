// NPM Modules
import React from "react";
import { useTranslation } from "react-i18next";
// Material UI
// Own components
import Authentication from "../../../components/forms/Authentication";
// Models
// Own modules
// Assets
// CSS

// Request reset passworf section
export default function RequestReset(props) {
    
    // Translate
    const { t } = useTranslation();

    // Handle onSubmit event
    const requestReset = async (inputs) => {
        const { email } = {...inputs};
        props.requestResetAccount(email)
        .then(user => props.enqueueSnackbar(t("Check your email to reset password"), { variant: "info", }))
        .catch(error => props.enqueueSnackbar(error, { variant: "error", }));
    }
    
    // Render
    return (
        <Authentication 
            form="requestReset"
            isLoading={props.isAuthenticating} 
            onSubmit={requestReset} 
        />
    );
}
