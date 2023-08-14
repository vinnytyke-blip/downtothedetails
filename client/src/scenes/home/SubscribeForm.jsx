import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState, useEffect } from "react";

const SubsribeForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(status === 'success');

    const submit = () => {
        if (email && email.indexOf('@') > -1) {
            onValidated({
                EMAIL: email,
            });
        }
    };

    useEffect(() => {
        if (status === 'success') {
            setShowSuccess(true);
            const timeout = setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [status]);

    return (
        <Box margin="80px auto" textAlign="center" bgcolor="rgb(0, 0, 0, 0.4)" borderRadius="8px">
            <IconButton>
                <MarkEmailReadOutlinedIcon fontSize="large" style={{ color: 'white' }} />
            </IconButton>
            <Typography variant="h5" style={{ color: 'white' }}>
                Subscribe To Our Newsletter
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                and receive $20 coupon for your first order when you checkout
            </Typography>
            <Box
                p="2px 4px"
                m="15px auto"
                display="flex"
                alignItems="center"
                backgroundColor="#F2F2F2"
                borderRadius="8px"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <Typography
                    sx={{ p: '10px', ':hover': { cursor: 'pointer' } }}
                    onClick={submit}
                >
                    Subscribe
                </Typography>
            </Box>
            <Box alignItems='center' marginBottom='4px'>
                {status === 'sending' && <Typography sx={{ color: 'white' }}>Sending...</Typography>}
                {status === 'error' && <Typography sx={{ color: 'white' }}>{message}</Typography>}
                {showSuccess && (
                    <Box bgcolor="#28a745" borderRadius={4} p={1}>
                        <Typography sx={{ color: 'white' }}>Thank You for Subscribing!</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default SubsribeForm;
