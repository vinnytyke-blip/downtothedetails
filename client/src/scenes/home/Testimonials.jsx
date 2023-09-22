import { Box, Typography } from '@mui/material';
import { testimonials } from '../../assets';

const Testimonials = () => {
  return (
    <>
      <Box display='flex' paddingTop='50px' alignItems='center' justifyContent='center' letterSpacing='0.3em'>
        <Typography variant='h2'>TESTIMONIALS</Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        gap="16px"
        alignItems='center'
        justifyContent='center'
        paddingBottom='50px'
        marginX='10px'
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            width='400px'
            height='100%'
            margin='16px auto'
            padding='16px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Typography
              variant='body1'
              lineHeight='1.5'
              letterSpacing='0.1em'
              fontStyle='italic'
            >
              "{testimonial.text}"
            </Typography>
            <Typography
              paddingTop='15px'
              fontFamily='Montserrat, sans-serif'
              fontWeight='200'
              letterSpacing='2px'
            >
              - {testimonial.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Testimonials;