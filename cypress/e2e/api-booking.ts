import { bookingContext } from '../support/utils/booking-context';

bookingContext((BookingAPI) => {
  it('Create, update, and delete a booking', () => {
    const api = BookingAPI();

    api
      .createBooking()
      .authenticate()
      .updateBooking()
      .deleteBooking();
  });
});
