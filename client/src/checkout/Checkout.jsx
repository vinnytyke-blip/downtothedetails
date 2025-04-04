import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Shipping from "./Shipping";
import Payment from "./Payment";
import { shades } from "../theme";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_live_51NO8hKLAbrjLVSMuKJof0OH0NGl1vTjEjxkVglQUPhVWpFXN5vS27CgJI7rvA2PFJjoIUtuvUTOmeO3t5AFtKhJg00wv1QV3lB"
);

const initialValues = {
    billingAddress: {
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    shippingAddress: {
        isSameAddress: true,
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    email: "",
    phoneNumber: "",
};

const checkoutSchema = [
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            country: yup.string().required("required"),
            street1: yup.string().required("required"),
            street2: yup.string(),
            city: yup.string().required("required"),
            state: yup.string().required("required"),
            zipCode: yup.string().required("required"),
        }),
        shippingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            lastName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            country: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            street1: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            street2: yup.string(),
            city: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            state: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
            zipCode: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required"),
            }),
        }),
    }),
    yup.object().shape({
        email: yup.string().required("required"),
        phoneNumber: yup.string().required("required")
    })
]

const Checkout = () => {
    const [activeStep, setActiveStep] = useState()
    const cart = useSelector((state) => state.cart.cart)
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (value, actions) => {
        setActiveStep(activeStep + 1);

        if (isFirstStep && value.shippingAddress.isSameAddress) {
            actions.setFieldValue("shippingAddress", {
                ...value.billingAddress,
                isSameAddress: true,
            })
        }

        if (isSecondStep) {
            makePayment(value);
        }

        actions.setTouched({});
    }

    async function makePayment(values) {
        const stripe = await stripePromise;
        const requestBody = {
            userName: [values.firstName, values.lastName].join(" "),
            email: values.email,
            products: cart.map(({ id, count }) => ({
                id,
                count,
            }))
        };

        const response = await fetch("http://localhost:1337/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });
        const session = await response.json();
        await stripe.redirectToCheckout({
            sessionId: session.id,
        });
    }
    return (
        <Box width="80%" m="100px auto">
            <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
                <Step>
                    <StepLabel>Billing</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Payment</StepLabel>
                </Step>
            </Stepper>
            <Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema[activeStep]}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handelSubmit,
                        setFieldValue
                    }) => (
                        <form onSubmit={handelSubmit}>
                            {isFirstStep && (
                                <Shipping
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                />
                            )}
                            {isSecondStep && (
                                <Payment
                                    values={values}
                                    errors={errors}
                                    touched={touched}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    setFieldValue={setFieldValue}
                                />
                            )}
                            <Box display="flex" justifyContent="space-between" gap="50px">
                                {isSecondStep && (
                                    <Button
                                        fullWidth
                                        color="primary"
                                        varient="contained"
                                        sx={{
                                            backgroundColor: shades.primary[200],
                                            boxShadow: "none",
                                            color: "white",
                                            borderRadius: 0,
                                            padding: "15px 40px"
                                        }}
                                        onClick={() => setActiveStep(activeStep - 1)}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    fullWidth
                                    type="submit"
                                    color="primary"
                                    varient="contained"
                                    sx={{
                                        backgroundColor: shades.primary[400],
                                        boxShadow: "none",
                                        color: "white",
                                        borderRadius: 0,
                                        padding: "15px 40px"
                                    }}
                                >
                                    {isFirstStep ? "Next" : "Place Order"}
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
}

export default Checkout;