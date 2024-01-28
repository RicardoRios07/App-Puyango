import {useTheme} from '@emotion/react';
import {Box, Container, Link, Typography} from '@mui/material';
import {useSidebarContext} from 'src/contexts/SidebarContext';
import logoTikee from "src/assets/tikeeB.svg";

const Footer = () => {

    const theme = useTheme();
    const {sidebarToggle} = useSidebarContext()

    return (
        <Container maxWidth={'xl'}>
            <Box
                pb={4}
                display={{xs: 'block', md: 'flex'}}
                alignItems="center"
                textAlign={{xs: 'center', md: 'left'}}
                justifyContent="space-between"
                sx={{
                    [theme.breakpoints.up('lg')]: {
                        ml: sidebarToggle ? `${theme.sidebar.width}` : '70px'
                    },
                    transition: 'margin 0.5s'
                }}>
                <Box style={{ userSelect: 'none' }}>
                    <Typography variant="subtitle1">
                        &copy;Copyright 2024 TIKEE 
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        pt: {xs: 2, md: 0}
                    }}
                    style={{ userSelect: 'none' }}
                    variant="subtitle1">
                    Powered by {' '}
                    <Link
                        href="https://Tikee.tech"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt="icon" src={logoTikee}/>
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Footer;
