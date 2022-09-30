import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  logoUrl:PropTypes.string
};

export default function Logo({ logoUrl,disabledLink = false, sx }) {
  // OR
  const logo = <Box component="img" src={logoUrl} sx={{ width: 40, height: 40, ...sx }} />



  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
