import LandRegistration from '../components/Land/LandRegistration';
import LandVerification from '../components/Land/LandVerification';
import LandTransfer from '../components/Land/LandTransfer'; // If exists
import AppointmentBooking from '../components/Services/AppointmentBooking';
import ApplicationTracking from '../components/Services/ApplicationTracking';
import FormsDownload from '../components/Services/FormsDownload';

export const routes = [
  {
    path: '/register-land',
    component: LandRegistration,
    name: 'Land Registration',
  },
  {
    path: '/verify-land',
    component: LandVerification,
    name: 'Land Verification',
  },
  {
    path: '/transfer-land',
    component: LandTransfer,
    name: 'Land Transfer',
  },
  {
    path: '/appointment',
    component: AppointmentBooking,
    name: 'Book Appointment',
  },
  {
    path: '/track',
    component: ApplicationTracking,
    name: 'Track Application',
  },
  {
    path: '/forms',
    component: FormsDownload,
    name: 'Download Forms',
  },
];
