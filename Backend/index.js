const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');
const loginApi = require('./user_authentication/user_login')
const registerApi = require('./user_authentication/user_register')
const partnerRegisterApi = require('./partner_authentication/partner_register')
const partnerLoginApi = require('./partner_authentication/partner_login')
const doctorInformationApi = require('./partner_authentication/doctor_information')
const therapyInformationApi = require('./partner_authentication/therapy_information')
const nurseInformationApi = require('./partner_authentication/nurse_information')
const doctorSortApi = require('./partner_routes/partners_sort')
const searchBarApi = require('./user_routes/searchbar')
const scheduleAppointmentApi = require('./user_routes/schedule_appointment')
const feedbackAPi = require('./user_routes/feedback')
const myBookingsApi = require('./user_routes/user_booking_management')
const partnerBookingsApi = require('./partner_routes/partner_booking_management')
const generateInvoiceApi = require('./partner_routes/generate_invoice')
const adminLoginApi = require('./admin_authentication/admin_login')
const adminRegisterApi = require('./admin_authentication/admin_register')
const adminBookingManagementApi = require('./admin_routes/admin_booking_management')
const deleteUserApi = require('./admin_routes/delete_user')
const blockUserPartnerApi = require('./admin_routes/block_user_partner')
const myProfileApi = require('./user_routes/userProfile')
const enquireApi = require('./user_routes/enquiry')

router.use(bodyParser.json());
app.use(cors());

app.use(loginApi);
app.use(registerApi);
app.use(partnerRegisterApi)
app.use(partnerLoginApi)
app.use(doctorInformationApi)
app.use(therapyInformationApi)
app.use(nurseInformationApi)
app.use(doctorSortApi)
app.use(searchBarApi)
app.use(scheduleAppointmentApi)
app.use(feedbackAPi)
app.use(myBookingsApi)
app.use(partnerBookingsApi)
app.use(generateInvoiceApi)
app.use(adminLoginApi)
app.use(adminRegisterApi)
app.use(adminBookingManagementApi)
app.use(deleteUserApi)
app.use(blockUserPartnerApi)
app.use(myProfileApi)
app.use(enquireApi)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});