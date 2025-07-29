import { BookingAPI } from '../api/booking';

export const bookingContext = (callback: (getBookingAPI: () => BookingAPI) => void): void => {
  context('Booking API Tests', () => {
    const getBookingAPI = (): BookingAPI => new BookingAPI();
    callback(getBookingAPI);
  });
};
