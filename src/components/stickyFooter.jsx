import * as React from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './stickyFooter.css';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export default function StickyFooter() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <AutoAwesomeIcon className="footer-icon" />
          <span className="footer-text">
            Master the art of security auditing with Sectheta
          </span>
        </div>
        <button className="footer-button">Apply Now</button>
      </div>
    </footer>
  );
}
