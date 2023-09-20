import { Box, Typography } from '@mui/material';
import { testimonials } from '../../assets';

const Testimonials = () => {
  return (
    <>
      <Box display='flex' paddingTop='50px' alignItems='center' justifyContent='center' letterSpacing='0.3em'>
        <Typography variant='h2'>Testimonials</Typography>
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
            height='400px'
            margin='16px auto'
            padding='16px'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='body1' lineHeight='1.5' letterSpacing='0.1em' sx={{ fontStyle: 'italic' }}>
              "{testimonial.text}"
            </Typography>
            <Typography varient='h3' marginTop={{sm: '10px', md: '20px'}}>- {testimonial.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Testimonials;